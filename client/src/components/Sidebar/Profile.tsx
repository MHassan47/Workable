import React from "react";
import { useNavigate } from "react-router-dom";
import { BsBookmarkStar } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
function Profile() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center gap-x-6">
      <div>
        <div className="flex justify-center text-xl items-center w-10 h-10 bg-gray-200 rounded-lg">
          <FaUser />
        </div>
      </div>
      <div
        className="flex justify-center text-xl items-center w-12 h-10 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => navigate("/saved")}
      >
        <BsBookmarkStar />
      </div>
    </div>
  );
}

export default Profile;
