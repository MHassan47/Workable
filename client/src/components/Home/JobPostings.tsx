import React, { FC, useEffect, useState } from "react";

import JobDetails from "./JobDetails";
interface Job {
  id: number;
  company: string;
  title: string;
  description: string;
  salaryMinimum: number;
  salaryMaximum: number;
  location: string;
}

interface Props {
  jobs: Job[];
  setSelected: React.Dispatch<React.SetStateAction<Job | null>>;
  selected: Job | null;
}
const JobPostings: FC<Props> = ({ jobs, setSelected, selected }) => {
  return (
    <div className="flex w-2/3 justify-center h-5/6">
      <ul className=" bg-stone-100  h-full w-full p-10 rounded-3xl overflow-y-scroll overflow-x-hidden">
        {jobs.map((job: Job) => {
          return (
            <li
              key={job.id}
              onClick={() => setSelected(job)}
              className={`flex flex-row justify-around  bg-white w-full px-12 py-8  mb-6 rounded-2xl  
                bg-white-500 hover:bg-blue-00 hover:shadow-lg cursor-pointer ${
                  selected && selected.id === job.id
                    ? "border-4 border-blue-400  shadow-lg"
                    : ""
                } 
               `}
            >
              <div className="flex flex-col">
                <div className="text-lg font-semibold">{job?.title}</div>
                <div className="text-gray-400">{job?.company}</div>
              </div>
              {/* <div>{job?.description}</div> */}
              <div className="flex flex-col">
                <div className="font-semibold">{job?.location}</div>
                <div className="text-gray-400 text-center">Location</div>
              </div>

              <div className="flex flex-col">
                <div className="font-bold">
                  ${job?.salaryMinimum} - ${job?.salaryMaximum}
                </div>
                <div className="text-gray-400 text-center">Salary</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JobPostings;
