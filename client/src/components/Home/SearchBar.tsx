import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCHJOBS } from "../../GraphQL/Queries";
import { BiSearchAlt2 } from "react-icons/bi";
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
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

const SearchBar: React.FC<Props> = ({ jobs, setJobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchJobs, { error, data, loading }] = useLazyQuery(SEARCHJOBS, {
    onCompleted: (data) => {
      if (data.searchJobs) setJobs(data.searchJobs);
      //   console.log(data.searchJobs);
    },
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchJobs({ variables: { searchTerm } });
  };

  return (
    <div className=" w-2/5 mb-6">
      <div className="flex justify-evenly flex-row border-2  p-2 rounded-xl focus:bg-blue-400 ">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="job title, company, location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none "
          />
        </form>
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </div>
      <div className="ml-2 mt-2">
        {jobs.length} {jobs && jobs.length > 1 ? "results" : "result"}{" "}
      </div>
    </div>
  );
};

export default SearchBar;
