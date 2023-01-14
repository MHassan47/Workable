import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { IoCreateOutline, IoSettingsOutline } from "react-icons/io5";
import { BiSearchAlt2, BiBuildings } from "react-icons/bi";
import Logo from "./Logo";
import Profile from "./Profile";

const Sidebar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col border-r-2 border-blue-200 rounded-r-3xl py-6">
      <Logo />
      <div className=" h-screen w-64 flex flex-col justify-center">
        <div className="px-8 py-2">
          <div
            className="flex items-center text-zinc-700  cursor-pointer mb-10"
            onClick={() => navigate("/home")}
          >
            <HiOutlineHome className="text-2xl mr-4 text-zinc-600" />
            <span className="text-lg font-semibold hover:text-blue-600">
              Home
            </span>
          </div>
          <div className="flex items-center mt-4 text-zinc-700 hover:text-blue-500 cursor-pointer mb-10">
            <BiSearchAlt2 className="text-2xl mr-4 text-zinc-600" />
            <span className="text-lg font-semibold hover:text-blue-600">
              Search Jobs
            </span>
          </div>
          <div className="flex items-center mt-4 text-zinc-700  cursor-pointer mb-10">
            <BiBuildings className="text-2xl mr-4 text-zinc-600 " />
            <span className="text-lg font-semibold hover:text-blue-600">
              Top Companies
            </span>
          </div>
          <div className="flex items-center mt-4 text-zinc-700  cursor-pointer mb-10">
            <IoCreateOutline className="text-2xl mr-4 text-zinc-600" />
            <span className="text-lg font-semibold hover:text-blue-600">
              Post Job
            </span>
          </div>
          <div className="flex items-center mt-4 text-zinc-700  cursor-pointer mb-10">
            <IoSettingsOutline className="text-2xl mr-4 text-zinc-600" />
            <span className="text-lg font-semibold hover:text-blue-600">
              Settings
            </span>
          </div>
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
