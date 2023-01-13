import { Job } from "../entities/Job";
import { MyContext } from "src/MyContext";
import { isAuth } from "../middleware/isAuth";
import {
  Arg,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { dataSource } from "../dataSource";
import { User } from "../entities/User";

@Resolver()
export class JobResolver {
  //   @UseMiddleware(isAuth)
  @Query(() => [Job])
  async allJobs(): Promise<Job[]> {
    return Job.find();
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async createJob(
    @Ctx() { payload }: MyContext,
    @Arg("company") company: string,
    @Arg("title") title: string,
    @Arg("description") description: string,
    @Arg("salaryMinimum", () => Int) salaryMinimum: number,
    @Arg("salaryMaximum", () => Int) salaryMaximum: number,
    @Arg("location") location: string
  ) {
    const newJob = await Job.save({
      company,
      title,
      description,
      salaryMinimum,
      salaryMaximum,
      location,
    });

    await dataSource
      .createQueryBuilder()
      .relation(User, "myJob")
      .of(payload?.userId)
      .add(newJob);
    return true;
  }

  @Query(() => [Job])
  async searchJobs(@Arg("searchTerm") searchTerm: string): Promise<Job[]> {
    const jobs = await Job.createQueryBuilder("job")
      .where(
        "LOWER(job.title) LIKE :searchTerm OR LOWER(job.company) LIKE :searchTerm OR LOWER(job.location) LIKE :searchTerm",
        { searchTerm: `%${searchTerm.toLowerCase()}%` }
      )
      .getMany();
    return jobs;
  }

  // @Query(() => [Job])
  // @UseMiddleware(isAuth)
  // async savedJobs(@Ctx() { payload }: MyContext): Promise <Jobs[]>{
  //   return await Job.find({where: })
  // }
}
