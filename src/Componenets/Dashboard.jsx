import React from "react";
import shapes from "../assets/shapes.svg";
import separator from "../assets/lineSeparator.svg";

const Dashboard = () => {
  return (
    <div className="flex w-screen justify-center">
      <div className="flex w-[80%] gap-10">
        <div className="flex flex-col  h-screen w-[50%]">
          <div className="flex rounded-2xl w-full bg-mainBlue h-1/6 justify-between items-center">
            <div className="felx flex-col ml-10">
              <h1 className="text-3xl text-white">Hello Abderrahim !</h1>
              <p>its good to see you again!</p>
            </div>
            <img src={shapes} alt="shapes" className="w-[40%] mr-1" />
          </div>
        </div>
        <img src={separator} alt="separator" className="h-full" />
        <div className="felx felx-col w-1/4">
          <h1 className="text-xl text-mainBlue ml-5 font-bold">Announcement</h1>
          <div className="flex flex-col gap-1 bg-mainBlue w-full rounded-xl h-64 items-center">
            <p className="self-start ml-6">description</p>
            <input
              type="text"
              placeholder="description"
              className="w-5/6  rounded-lg border-2 h-40 bg-transparent border-white mt-1 placeholder-mainBlue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
