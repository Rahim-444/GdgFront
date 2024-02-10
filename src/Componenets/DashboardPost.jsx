import shapes from "../assets/shapes.svg";
import separator from "../assets/lineSeparator.svg";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import WeekCheckbox from "./Checkbox";
import { useState } from "react";

let data = {
  labels: [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ],
  datasets: [
    {
      label: "Rating",
      data: [30, 40, 50, 11, 56, 55, 40, 30, 20, 10, 5, 1],
      backgroundColor: "rgba(234, 243, 248,1)",
      borderColor: "rgba(255,255,255,1)",
      borderWidth: 1,
    },
  ],
};
let data2 = {
  labels: [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ],
  datasets: [
    {
      label: "Instagram",
      data: [130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240],
      backgroundColor: "rgba(216, 27, 96, 1)",
      borderColor: "rgba(216, 27, 96, 1)",
      borderWidth: 2,
    },
    {
      label: "Facebook",
      data: [85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140],
      backgroundColor: "rgba(66, 103, 178, 1)",
      borderColor: "rgba(66, 103, 178, 1)",
      borderWidth: 2,
    },
    {
      label: "Twitter",
      data: [70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15],
      backgroundColor: "rgba(29, 161, 242, 1)",
      borderColor: "rgba(29, 161, 242, 1)",
      borderWidth: 2,
    },
    {
      label: "LinkedIn",
      data: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
      backgroundColor: "rgba(14, 118, 168, 1)",
      borderColor: "rgba(14, 118, 168, 1)",
      borderWidth: 2,
    },
  ],
};
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
  const [optimalTime, setOptimalTime] = useState("10:00");
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
              <ChartSocial optimalTime={optimalTime} />
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
                onClick={() => { }}
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

const ChartSocial = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-5 mb-8">
        Your Statistics
      </h1>
      <div className="h-4/6 w-full ml-5 flex justify-center text-white">
        <Line data={data2} options={options} />
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
