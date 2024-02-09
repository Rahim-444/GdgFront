import shapes from "../assets/shapes.svg";
import separator from "../assets/lineSeparator.svg";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

let data = {
  labels: ["10:00", "11:00", "12:00", "13:00"],
  datasets: [
    {
      label: "Rating",
      data: [30, 40, 50, 11],
      backgroundColor: "rgba(21, 56, 85,1)",
      borderColor: "rgba(21, 56, 85,0.2)",
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

const Dashboard = () => {
  return (
    <>
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
            <h1 className="text-xl text-mainBlue ml-5 font-bold">
              Announcement
            </h1>
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
      <div className="w-1/2">
        <Bar data={data} />
      </div>
      <div className="w-1/2">
        <Line data={data2} />
      </div>
    </>
  );
};

export default Dashboard;
