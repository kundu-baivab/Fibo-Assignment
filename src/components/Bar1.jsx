// import React from "react";

const Bar1 = () => {
  return (
    <div className="b1 min-h-[100px] flex my-5 ">
      <div className="relative w-20 h-20 top-5 left-4">
        <div className="w-16 h-16 border rounded-full flex justify-center items-center shadow absolute">
          <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center absolute">
            <div className="ic w-8 h-8 rounded-full flex justify-center items-center relative">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-2">
        <p className="pt relative ml-3 top-5">Your Daily Goal Almost Done</p>
        <p className="pb relative ml-3 mt-4">4 Of 5 Completed</p>
        <div className="ml-3 mt-2 slider">
          <div className="slider-track"></div>
        </div>
        <div className="text-right">
          <p className="text-gray-300 mb-2">80%</p>
        </div>
      </div>
    </div>
  );
};

export default Bar1;
