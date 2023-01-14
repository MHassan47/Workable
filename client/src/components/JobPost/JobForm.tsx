import React, { useState } from "react";
import { Job } from "../../pages/Saved";

const JobForm: React.FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    description: "",
    salaryMinimum: 0,
    salaryMaximum: 0,
    location: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 rounded-2xl p-8 h-2/3 w-3/5"
    >
      <label className="font-semibold text-lg">Company</label>
      <br />
      <input
        type="text"
        name="company"
        required
        value={formData.company}
        onChange={handleInputChange}
        className="border-2 m-2 border-zinc-300 rounded-lg w-2/3 p-2"
      />
      <br />
      <label className="font-semibold text-lg">Title</label>
      <br />
      <input
        type="text"
        name="title"
        required
        value={formData.title}
        onChange={handleInputChange}
        className="border-2 m-2 border-zinc-300 rounded-lg w-2/3 p-2"
      />
      <br />
      <label className="font-semibold text-lg">Description</label>
      <br />
      <textarea
        name="description"
        required
        value={formData.description}
        // onChange={handleInputChange}
        className="border-2 m-2 border-zinc-300 rounded-lg w-2/3 h-1/5 p-2"
      />
      <br />
      <label className="font-semibold text-lg">Salary Minimum</label>
      <br />
      <input
        type="number"
        name="salaryMinimum"
        required
        value={formData.salaryMinimum}
        onChange={handleInputChange}
        className="border-2 m-2 border-zinc-300 rounded-lg w-2/3 p-2"
      />
      <br />
      <label className="font-semibold text-lg">Salary Maximum</label>
      <br />
      <input
        type="number"
        name="salaryMaximum"
        required
        value={formData.salaryMaximum}
        onChange={handleInputChange}
        className="border-2 m-2 border-zinc-300 rounded-lg w-2/3 p-2"
      />
      <br />
      <label className="font-semibold text-lg">Location</label>
      <br />
      <input
        type="text"
        name="location"
        required
        value={formData.location}
        onChange={handleInputChange}
        className="border-2 m-2 border-zinc-300 rounded-lg w-2/3 p-2"
      />
      <br />
      <div className="text-center">
        <button
          // onClick={onSubmitHandler}
          className=" bg-blue-600 hover:bg-blue-500 h-10 w-20 rounded-lg mt-10 font-semibold text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default JobForm;
