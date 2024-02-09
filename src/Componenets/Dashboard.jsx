import React from "react";
import shapes from "../assets/shapes.svg";
import separator from "../assets/lineSeparator.svg";
import button from "../assets/button.png";

const Dashboard = () => {
  return (
    <div className="flex w-screen justify-center">
      <div className="flex w-[98%] gap-1 ">
        <div className="flex flex-col px-2  h-screen w-[80%]">
          <div className="flex rounded-2xl w-full bg-mainBlue h-[23%] justify-between items-center">
            <div className="felx flex-col ml-10">
              <h1 className="text-3xl text-white">Hello Abderrahim !</h1>
              <p>its good to see you again!</p>
            </div>
            <img src={shapes} alt="shapes" className="w-[27%] mr-1" />
          </div>
        </div>
        <img src={separator} alt="separator" className="h-full" />
        <div className="felx felx-col w-[20%]">
          <h1 className="text-xl text-mainBlue ml-5 font-bold">Announcement</h1>
          <div className="flex flex-col gap-3 bg-mainBlue w-full rounded-xl h-72 items-center">
            <p className="self-start ml-6 mt-3">description</p>
            <input
              type="text"
              placeholder="description"
              className="w-5/6  rounded-lg border-2 h-40 bg-transparent border-white mt-1 placeholder-mainBlue"
            />
            <button className="bg-[#4580F3] w-3/4 h-12 rounded-tl-xl rounded-br-xl text-white">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
