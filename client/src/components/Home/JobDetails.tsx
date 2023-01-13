import React, { FC } from "react";
import { useMutation } from "@apollo/client";
import { SAVEJOB } from "../../GraphQL/Mutations";
interface Job {
  id: number;
  company: string;
  title: string;
  description: string;
  salaryMinimum: number;
  salaryMaximum: number;
  location: string;
}
const JobDetails: FC<{ job: Job }> = ({ job }) => {
  const [saveJob, { error }] = useMutation(SAVEJOB);
  const saveJobHandler = () => {
    const token = localStorage.getItem("authorization");
    saveJob({
      variables: {
        jobId: job.id,
        context: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex border-2 min-w-full min-h-screen">
      {!job.id ? (
        ""
      ) : (
        <div className="flex flex-col justify-around items-center">
          <div className="text-2xl font-bold text-center"> {job.company}</div>
          <h2 className="text-xl font-semibold text-center">{job.title}</h2>
          <label className="font-bold text-left">Description</label>
          <div className="flex border-2 text-stone-500 text-lg w-5/6 text-center overflow-y-scroll overflow-x-hidden h-4/6">
            {job.description}
          </div>
          <div>
            <label className="font-bold text-left">Location</label>
            <div>{job.location}</div>
          </div>
          <div>
            Salary: {job.salaryMinimum}k - {job.salaryMaximum}k
          </div>
          <div className="flex justify-center gap-x-8">
            <button
              onClick={saveJobHandler}
              className=" bg-blue-600 hover:bg-blue-500 h-10 w-20 rounded-lg mt-10 font-semibold text-white"
            >
              Save Job
            </button>
            {/* <button
              // onClick={saveJobHandler}
              className=" bg-zinc-700 hover:bg-zinc-600 h-10 w-28 rounded-lg mt-10 font-semibold text-white"
            >
              Apply Now
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
