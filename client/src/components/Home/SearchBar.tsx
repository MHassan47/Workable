import React, { useState } from "react";

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
  // State to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle changes to the search input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter the jobs based on the search term
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredJobs = jobs.filter((job) => {
      return job.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setJobs(filteredJobs);
  };

  return (
    <div className="flex w-1/2 border-2 p-2 rounded-xl">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
