import shapes from "../assets/shapes.svg";
import separator from "../assets/lineSeparator.svg";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import WeekCheckbox from "./Checkbox";
import { useState } from "react";
import { fetchApi } from "../../fetch";

const options = {
  scales: {
    x: {
      ticks: {
        color: "white",
      },
    },
    y: {
      ticks: {
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
};

let Notifications = [
  {
    name: "rahim",
    time: "10:00",
    description: "Front end session",
  },
  {
    name: "Omar",
    time: "11:00",
    description: "backend with exprss js",
  },
];

const Dashboard = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="flex  justify-center">
        <div className="flex w-[98%] gap-1">
          <div className="flex flex-col px-2  h-screen w-[80%]">
            <div className="flex rounded-2xl w-full bg-mainBlue h-[23%] justify-between items-center mt-2 overflow-hidden">
              <div className="felx flex-col ml-10">
                <h1 className="text-3xl text-white ">
                  Hello <span className="font-bold">Abderrahim ! 👋</span>
                </h1>
                <p className="text-xl">its good to see you again!</p>
              </div>
              <img src={shapes} alt="shapes" className="w-[37%] mr-1" />
            </div>
            <div className="flex flex-col bg-mainBlue h-[55%] mt-5 rounded-2xl justify-center ">
              <Schudule />
            </div>
          </div>
          <img src={separator} alt="separator" className="h-[80%]" />
          <div className="felx felx-col w-[20%]">
            <h1 className="text-xl text-mainBlue ml-5 font-bold">
              Announcement
            </h1>
            <div className="flex flex-col gap-3 bg-mainBlue w-full rounded-xl h-72 items-center">
              <p className="self-start ml-6 mt-3">Description</p>
              <div className="w-5/6  rounded-lg border-2 h-40 bg-transparent border-white mt-1 placeholder-mainBlue">
                <textarea
                  type="text"
                  className="bg-transparent border-none w-full focus:border-none active:border-none h-full"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </div>
              <button
                className="bg-[#4580F3] w-5/6 h-12 rounded-tl-xl rounded-br-xl text-white"
                type="submit"
                onClick={() => {
                  fetchApi();
                }}
              >
                Post
              </button>
            </div>
            <h1 className="text-xl text-mainBlue ml-5 font-bold mt-5">
              Notifications
            </h1>
            <div>
              {Notifications.map((notification, index) => (
                <Notifs
                  key={index}
                  name={notification.name}
                  time={notification.time}
                  description={notification.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Notifs = ({ name, time, description }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 bg-mainBlue w-full rounded-xl h-40 items-center mt-2 overflow-hidden relative">
        <div className="bg-red-600 rounded-full w-48 h-48 absolute ml-72 border-8 border-green-500 z-0"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-bold text-xl pl-1 relative pt-2">
            {name} Planned a meeting
          </h1>
          <h1 className="text-bold text-xl pl-1 relative pt-2">{time}</h1>
          <p className="relative">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Schudule = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-5 mb-3">
        Choose a Time
      </h1>
      <WeekCheckbox />
      <input className="bg-transparent rounded"></input>
    </>
  );
};
export default Dashboard;
