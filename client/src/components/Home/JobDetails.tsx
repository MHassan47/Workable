import React, { FC } from "react";
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
  return (
    <div className="flex">
      {!job.id ? (
        ""
      ) : (
        <div className="flex flex-col  items-center justify-between">
          <div className="text-2xl font-bold"> {job.company}</div>
          <h2>{job.title}</h2>
          <label className="font-bold">Description</label>
          <div>{job.description}</div>
          <div>Location: {job.location}</div>
          <div>
            Salary: {job.salaryMinimum}k - {job.salaryMaximum}k
          </div>
          <button
            onClick={() => console.log(job.id)}
            className="bg-blue-600 hover:bg-blue-500 h-10 w-20 rounded-lg mt-10 font-semibold text-white"
          >
            Save Job
          </button>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
