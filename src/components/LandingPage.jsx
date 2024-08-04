import React, { useState } from "react";
import svg from "../assets/svgff.svg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="fixed top-0 w-full bg-white h-14 shadow-lg flex items-center justify-center">
        <div className="h-full w-full flex items-center justify-between p-2 max-w-2xl">
          <img src={logo} alt="logo" className="w-8 md:w-12" />
          <Link to={"/user"}>
            <button className="bg-black p-2 text-white font-semibold rounded md:text-xl">
              Generate
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center space-y-4">
        <div className="font-semibold flex items-center space-x-2 bg-sky-300 rounded-full p-4 md:p-5 border border-sky-950 w-fit">
          <img src={svg} alt="svvg" className="w-5 md:w-8" />
          <div className="md:text-2xl"> Welcome OG</div>
        </div>

        <div className=" bg-yellow-100 p-2 rounded-sm font-semibold md:p-3 text-xl w-fit">
          <p>Best place for automated OG image generation</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
