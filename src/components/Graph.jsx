// import React from "react";

const Graph = () => {
  return (
    <div className="b2 rounded-xl min-h-[200px] mb-20">
      <div className="flex flex-col items-center mx-5 mt-7 mb-7">
        <div className="flex justify-between w-full ml-3 mt-4">
          <div className="flex flex-col justify-between mr-3">
            <p className="text-white text-sm flex-grow">100%</p>
            <p className="text-white text-sm flex-grow">80%</p>
            <p className="text-white text-sm flex-grow">60%</p>
            <p className="text-white text-sm flex-grow">40%</p>
            <p className="text-white text-sm flex-grow">20%</p>
          </div>
          <div className="flex items-end justify-between w-full">
            <div className="flex flex-col">
              <p className="text-white text-xs">92</p>
              <div
                className="w-5 rounded-sm bg-blue-400 my-1"
                style={{ height: "305px" }}
              ></div>
              <p className="text-white text-xs">28/4</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-xs">100</p>
              <div className="h-80 w-5 rounded-sm bg-blue-400 my-1"></div>
              <p className="text-white text-xs">30/4</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-xs">98</p>
              <div
                className="h-80 w-5 rounded-sm bg-blue-400 my-1 "
                style={{ height: "310px" }}
              ></div>
              <p className="text-white text-xs">02/5</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-xs">90</p>
              <div
                className="h-80 w-5 rounded-sm bg-blue-400 my-1"
                style={{ height: "300px" }}
              ></div>
              <p className="text-white text-xs">05/5</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-xs">84</p>
              <div
                className="h-80 w-5 rounded-sm bg-blue-400 my-1"
                style={{ height: "270px" }}
              ></div>
              <p className="text-white text-xs">11/5</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-xs">82</p>
              <div
                className="h-80 w-5 rounded-sm bg-blue-400 my-1"
                style={{ height: "260px" }}
              ></div>
              <p className="text-white text-xs">15/5</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-xs">80</p>
              <div
                className="w-5 rounded-sm bg-blue-400 my-1"
                style={{ height: "250px" }}
              ></div>
              <p className="text-white text-xs">15/5</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-xs">80</p>
              <div
                className="w-5 rounded-sm bg-blue-400 my-1"
                style={{ height: "250px" }}
              ></div>
              <p className="text-white text-xs">22/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
