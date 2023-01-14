import React from "react";
import JobForm from "../components/JobPost/JobForm";
import Sidebar from "../components/Sidebar/Sidebar";

function CreateJob() {
  return (
    <div className="flex justify-center h-screen">
      <Sidebar />
      <div className="flex flex-col items-center w-1/2 justify-center">
        <h1 className="font-bold text-xl mb-6">Create job posting</h1>
        <JobForm />
      </div>
      <div className="flex w-1/3 items-center"></div>
    </div>
  );
}

export default CreateJob;
