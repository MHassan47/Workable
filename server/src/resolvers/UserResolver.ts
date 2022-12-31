import { User } from "../entities/User";
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

@ObjectType()
class LoginResponse {
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

  @Mutation(() => Boolean)
  async login(@Arg("email") email: string, @Arg("password") password: string) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("could not find user");
    }
    const validPassword = bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("password incorrect");
    }

    return {
      accessToken: sign({ userId: user.id }, "secretkey", { expiresIn: "15m" }),
    };
  }
}
