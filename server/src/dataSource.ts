import { Job } from "./entities/Job";
import { User } from "./entities/User";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  database: "workable",
  entities: [User, Job],
  logging: true,
  synchronize: true,
  username: "postgres",
  password: "postgres",
  port: 5432,
});
dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
