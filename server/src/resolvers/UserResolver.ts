import { User } from "../entities/User";
import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { MyContext } from "src/MyContext";
import { isAuth } from "../middleware/isAuth";
import { Job } from "../entities/Job";

import { dataSource } from "../dataSource";

@ObjectType()
class LoginResponse {
  @Field(() => Int)
  user: number;
  @Field()
  accessToken: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello(): string {
    return "hello world";
  }

  @Mutation(() => Boolean)
  async createUser(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    await User.insert({ firstName, lastName, email, password: hashedPassword });
    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });
    console.log(user);
    if (!user) {
      throw new Error("could not find user");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword);
    if (!validPassword) {
      throw new Error("password incorrect");
    }

    return {
      user: user.id,
      accessToken: sign({ userId: user.id }, "secretkey", { expiresIn: "1h" }),
    };
  }

  @Query(() => User, { nullable: true })
  @UseMiddleware(isAuth)
  async me(@Ctx() { payload }: MyContext) {
    const user = await User.findOneBy({ id: payload?.userId });
    return user;
  }

  @Query(() => Int)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    return payload?.userId;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async saveJobPost(@Ctx() { payload }: MyContext, @Arg("jobId") id: number) {
    try {
      const user = await User.findOne({ where: { id: payload?.userId } });
      const job = await Job.findOne({ where: { id: id } });
      console.log(user);
      if (!user || !job) {
        throw new Error("user or job not found");
      }

      await dataSource
        .createQueryBuilder()
        .relation(User, "job")
        .of(payload?.userId)
        .add(job.id);

      return true;
    } catch (err) {
      throw new Error("failed");
    }
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async unsaveJobPost(@Ctx() { payload }: MyContext, @Arg("jobId") id: number) {
    try {
      const user = await User.findOne({ where: { id: payload?.userId } });
      const job = await Job.findOne({ where: { id: id } });
      console.log(user);
      if (!user || !job) {
        throw new Error("user or job not found");
      }

      await dataSource
        .createQueryBuilder()
        .relation(User, "job")
        .of(payload?.userId)
        .remove(job.id);

      return true;
    } catch (err) {
      throw new Error("failed");
    }
  }
}
