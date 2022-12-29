import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express, { Express, Request, Response } from "express";
import { buildSchema } from "type-graphql";

import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  const app: Express = express();

  apolloServer.applyMiddleware({ app });

  app.get("/", (_req: Request, res: Response) => res.send("Hello World"));
  const PORT = 3000;

  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
};

main().catch((err) => console.log(err));
