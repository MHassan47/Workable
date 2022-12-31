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
      accessToken: sign({ userId: user.id }, "secretkey", { expiresIn: "15m" }),
    };
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    return `user id: ${payload?.userId}`;
  }
}
