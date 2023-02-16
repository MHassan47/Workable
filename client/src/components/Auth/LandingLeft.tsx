import React from "react";
import Logo from "../Sidebar/Logo";
const landing_image = require("../../assets/workable_image.png");

function LandingLeft() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 h-screen bg-blue-400 w-2/5">
      <img src={landing_image} className="h-1/2 w-1/2" />
      <h1 className="text-xl font-bold text-white ">
        You are a click away from the job of your dreams{" "}
      </h1>
    </div>
  );
}

export default LandingLeft;
