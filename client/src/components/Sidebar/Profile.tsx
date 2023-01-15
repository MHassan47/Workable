import React from "react";
import { useNavigate } from "react-router-dom";
import { BsBookmarkStar } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
function Profile() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("authorization");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="flex flex-row justify-center gap-x-6">
      <div>
        <div className="flex justify-center text-xl items-center w-16 h-10 bg-red-200 hover:bg-red-400 rounded-lg cursor-pointer">
          <BiLogOut onClick={logoutHandler} />
        </div>
      </div>
      <div>
        <div className="flex justify-center text-xl items-center w-10 h-10 bg-gray-200 rounded-lg cursor-pointer">
          <FaUser />
        </div>
      </div>
      <div
        className="flex justify-center text-xl items-center w-12 h-10 bg-gray-200  rounded-lg cursor-pointer"
        onClick={() => navigate("/saved")}
      >
        <BsBookmarkStar />
      </div>
    </div>
  );
}

export default Profile;
