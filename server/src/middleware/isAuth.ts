import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { MyContext } from "../MyContext";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const autherization = context.req.headers["authorization"];

  if (!autherization) {
    throw new Error("not authenticated!");
  }

  try {
    const token = autherization.split("")[1];
    const payload = verify(token, "secretkey");
    context.payload = payload as any;
  } catch (err) {
    throw new Error("not authenticated");
  }
  return next();
};
