import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express, { Express, Request, Response } from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { User } from "./entities/User";
import { UserResolver } from "./resolvers/UserResolver";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: "workable",
    entities: [User],
    logging: true,
    synchronize: true,
    username: "postgres",
    password: "postgres",
    port: 5432,
  });

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
  const PORT = 5000;

  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
};

main().catch((err) => console.log(err));
