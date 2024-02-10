import shapes from "../assets/shapes.svg";
import separator from "../assets/lineSeparator.svg";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import WeekCheckbox from "./Checkbox";
import axios from "axios";
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
      data: [30, 32, 29, 11, 7, 10, 23, 31, 48, 52, 55, 60],
      backgroundColor: "rgba(234, 243, 248,1)",
      borderColor: "rgba(255,255,255,1)",
      borderWidth: 1,
    },
  ],
};
let data2 = {
  labels: ["10:00", "11:00", "12:00"],
  datasets: [
    {
      label: "instagram",
      data: [11, 40, 22],
      backgroundColor: "rgba(216, 27, 96, 1)",
      borderColor: "rgba(216, 27, 96, 0.2)",
      borderWidth: 2,
    },
    {
      label: "facebook",
      data: [5, 23, 50],
      backgroundColor: "rgba(66, 103, 178, 1)",
      borderColor: "rgba(66, 103, 178, 0.2)",
      borderWidth: 2,
    },
    {
      label: "twitter",
      data: [55, 22, 11],
      backgroundColor: "rgba(29, 161, 242, 1)",
      borderColor: "rgba(29, 161, 242, 0.2)",
      borderWidth: 2,
    },
    {
      label: "linkedin",
      data: [3, 10, 5],
      backgroundColor: "rgba(14, 118, 168, 1)",
      borderColor: "rgba(14, 118, 168, 0.2)",
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
  const [descriptionData, setDescriptionData] = useState(null);
  const [optimalTime, setOptimalTime] = useState("10:00");

  const postDescription = async () => {
    let postData = {
      time1: "10:00",
      time2: "11:00",
    };
    try {
      await fetch("http://localhost:3001/create-poll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const response = await fetch("http://localhost:3001/api/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to post description");
      }

      // Fetch description data after posting
      fetchDescriptions();
    } catch (error) {
      console.error("Error posting description:", error);
      // Handle error
    }
  };

  const fetchDescriptions = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/voices");

      if (!response.ok) {
        throw new Error("Failed to fetch descriptions");
      }

      const data = await response.json();
      setDescriptionData(data);
    } catch (error) {
      console.error("Error fetching descriptions:", error);
      // Handle error
    }
  };
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
                onClick={postDescription}
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

const ChartSocial = ({ optimalTime }) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-5 mb-8">
        Your Statistics
      </h1>
      <div className="h-4/6 w-full ml-5 flex justify-around items-center">
        <Bar data={data} options={options} />
        <div className="flex flex-col justify-center items-center font-bold gap-3 text-2xl">
          <h1>Best Time</h1>
          <div className="bg-transparent rounded w-56 Box-Shadow text-red-600 font-bold text-center text-2xl h-full">
            {optimalTime}
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
