import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import JobPostings from "../components/Home/JobPostings";

import Sidebar from "../components/Sidebar/Sidebar";
import { GET_SAVED_JOBS } from "../GraphQL/Queries";

interface Job {
  id: number;
  company: string;
  title: string;
  description: string;
  salaryMinimum: number;
  salaryMaximum: number;
  location: string;
}

function Saved() {
  const { error, loading, data } = useQuery(GET_SAVED_JOBS, {
    onCompleted: (data) => console.log(data),
  });
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [selected, setSelected] = useState<Job | null>(null);

  useEffect(() => {
    if (data) setSavedJobs(data.getAllSavedJobs);
  }, [data]);

  return (
    <div className="flex justify-center h-screen">
      <Sidebar />
      <div className="flex flex-col items-center w-1/2 justify-center">
        <JobPostings
          jobs={savedJobs}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="flex w-1/3 items-center"></div>
    </div>
  );
}

export default Saved;
