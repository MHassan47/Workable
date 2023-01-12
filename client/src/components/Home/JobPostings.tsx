import React, { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_JOBS } from "../../GraphQL/Queries";
import JobDetails from "./JobDetails";
function JobPostings() {
  const { error, loading, data } = useQuery(GET_ALL_JOBS, {
    onCompleted: (data) => {},
  });

  const [jobs, setJobs] = useState([]);
  const [selected, setSelected] = useState<Job>({
    id: 0,
    company: "",
    title: "",
    description: "",
    salaryMinimum: 0,
    salaryMaximum: 0,
    location: "",
  });

  interface Job {
    id: number;
    company: string;
    title: string;
    description: string;
    salaryMinimum: number;
    salaryMaximum: number;
    location: string;
  }

  useEffect(() => {
    if (data) {
      setJobs(data.allJobs);
    }
  }, [data]);

  console.log(selected);
  return (
    <div className="flex justify-center  ">
      {loading ? (
        <div>loading..</div>
      ) : (
        <ul className="w-4/6 bg-gray-100 p-10 ">
          {jobs.map((job: Job) => {
            return (
              <li
                key={job.id}
                onClick={() => setSelected(job)}
                className={`flex flex-row justify-between bg-white w-full px-12 py-8  mb-6 rounded-2xl  
                bg-white-500 hover:bg-blue-00   ${
                  selected.id === job.id
                    ? "border-4 border-blue-400  shadow-lg"
                    : ""
                }`}
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
                    {job?.salaryMinimum}k - {job?.salaryMaximum}k
                  </div>
                  <div className="text-gray-400 text-center">Salary</div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <JobDetails job={selected} />
    </div>
  );
}

export default JobPostings;
