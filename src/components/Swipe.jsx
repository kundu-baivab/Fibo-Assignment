// import React from "react";
import arrow from "../assets/arrow.png";

const Swipe = () => {
  return (
    <div className="b3 min-h-[60px] flex items-center">
      <div className="w-12 h-12 rounded-full bg-white ml-2 mr-auto flex justify-center items-center">
        <p className="b3p font-bold text-sm">Track</p>
      </div>
      <p className="text-white text-xl font-semibold mr-auto">
        Swipe to track all
      </p>
      <div className="mr-5 flex">
        <img src={arrow} className="w-6 h-6 opacity-25" />
        <img src={arrow} className="w-6 h-6 opacity-50" />
        <img src={arrow} className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Swipe;
