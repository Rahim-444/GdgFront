import shapes from "../assets/shapes.svg";
import separator from "../assets/lineSeparator.svg";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

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
let Notifications = [
  {
    name: "Abderrahim",
    time: "10:00",
    description: "You have a new message from a client",
  },
  {
    name: "Omar",
    time: "11:00",
    description: "backend with exprss js",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="flex  justify-center">
        <div className="flex w-[98%] gap-1">
          <div className="flex flex-col px-2  h-screen w-[80%]">
            <div className="flex rounded-2xl w-full bg-mainBlue h-[23%] justify-between items-center mt-8">
              <div className="felx flex-col ml-10">
                <h1 className="text-3xl text-white">Hello Abderrahim !</h1>
                <p>its good to see you again!</p>
              </div>
              <img src={shapes} alt="shapes" className="w-[37%] mr-1" />
            </div>
            <div className="flex flex-col bg-mainBlue h-[55%] mt-5 rounded-2xl justify-center ">
              <Chart />
            </div>
          </div>
          <img src={separator} alt="separator" className="h-[80%]" />
          <div className="felx felx-col w-[20%]">
            <h1 className="text-xl text-mainBlue ml-5 font-bold">
              Announcement
            </h1>
            <div className="flex flex-col gap-3 bg-mainBlue w-full rounded-xl h-72 items-center">
              <p className="self-start ml-6 mt-3">Description</p>
              <input
                type="text"
                placeholder="description"
                className="w-5/6  rounded-lg border-2 h-40 bg-transparent border-white mt-1 placeholder-mainBlue"
              />
              <button className="bg-[#4580F3] w-3/4 h-12 rounded-tl-xl rounded-br-xl text-white">
                Post
              </button>
            </div>
            <h1 className="text-xl text-mainBlue ml-5 font-bold mt-5">
              Notifications
            </h1>
            <Notifs />
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <Line data={data2} />
      </div>
    </>
  );
};

const Chart = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-5 mb-8">
        Your Statistics
      </h1>
      <div className="h-4/6 w-full ml-5 flex justify-center">
        <Bar data={data} />
      </div>
    </>
  );
};
const Notifs = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 bg-mainBlue w-full rounded-xl h-40 items-center mt-2 overflow-hidden relative">
        <div className="bg-red-600 rounded-full w-48 h-48 absolute ml-72 border-8 border-green-500">
          <h1>`${name} Planned a meaning`</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
