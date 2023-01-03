import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express, { Express, Request, Response } from "express";
import { buildSchema } from "type-graphql";
import { createConnection, DataSource } from "typeorm";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { UserResolver } from "./resolvers/UserResolver";
import { JobResolver } from "./resolvers/JobResolver";

import { dataSource } from "./dataSource";

export const main = async () => {
  dataSource;

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, JobResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  const app: Express = express();

  apolloServer.applyMiddleware({ app });

  app.get("/", (_req: Request, res: Response) => res.send("Hello World"));
  const PORT = 5000;

  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
};

main().catch((err) => console.log(err));
