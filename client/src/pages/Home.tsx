import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_JOBS } from "../GraphQL/Queries";
import JobDetails from "../components/Home/JobDetails";
import JobPostings from "../components/Home/JobPostings";
import SearchBar from "../components/Home/SearchBar";
import Sidebar from "../components/Home/Sidebar";

function Home() {
  const { error, loading, data } = useQuery(GET_ALL_JOBS, {
    onCompleted: (data) => {},
  });

  const [jobs, setJobs] = useState<Job[]>([]);
  const [selected, setSelected] = useState<Job | null>(null);

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
    if (data && data.allJobs) {
      setJobs(data.allJobs);
    }
  }, [data]);

  return (
    <div className="flex justify-center h-screen">
      <Sidebar />
      <div className="flex flex-col items-center w-1/2 justify-center">
        <SearchBar jobs={jobs} setJobs={setJobs} />
        <JobPostings
          jobs={jobs}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="flex w-1/3 items-center">
        {selected && <JobDetails job={selected} />}
      </div>
    </div>
  );
}

export default Home;
