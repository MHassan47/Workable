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

@Resolver()
export class JobResolver {
  //   @UseMiddleware(isAuth)
  @Query(() => [Job])
  async allJobs(): Promise<Job[]> {
    return Job.find({});
  }

  @Mutation(() => Boolean)
  async createJob(
    @Arg("company") company: string,
    @Arg("title") title: string,
    @Arg("description") description: string,
    @Arg("salaryMinimum", () => Int) salaryMinimum: number,
    @Arg("salaryMaximum", () => Int) salaryMaximum: number,
    @Arg("location") location: string
  ) {
    await Job.insert({
      company,
      title,
      description,
      salaryMinimum,
      salaryMaximum,
      location,
    });
    return true;
  }

  //   @Query(() => [Job])
  //   @UseMiddleware(isAuth)
  //   async savedJobs(@Ctx() { payload }: MyContext): Promise <Jobs[]>{
  //     return await Job.find({where: })
  //   }
}
