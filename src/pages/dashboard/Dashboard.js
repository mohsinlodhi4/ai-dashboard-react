import React from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SpeedIcon from "@mui/icons-material/Speed";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className="py-5 m-auto ml-0 text-black font-primary">
          <div className="flex flex-row gap-2">
            <CalendarMonthIcon />
            <h3 className="text-black font-bold text-lg">
              Jan 1, 2023 - Feb 1, 2023
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-11">
          <div className="bg-black p-7 rounded-2xl lg:w-[50%]">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-white text-3xl font-bold">Web Traffic</h2>
              <div className="flex flex-row items-center gap-3">
                <h3 className="text-xl text-white font-bold">View Report</h3>
                <ListAltIcon className="text-white" style={{ fontSize: 28 }} />
              </div>
            </div>
            <div className="text-white py-5 flex flex-row text-center">
              <img
                src="images/chart-colum-svgrepo-com-white.png"
                className="w-3/6"
              />
              <img
                src="images/chart-colum-svgrepo-com-white.png"
                className="w-3/6"
              />
            </div>
          </div>
          <div className="bg-[#f5f5f5] p-7 rounded-2xl lg:w-[50%]">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-black text-3xl font-bold">Brand Growth</h2>
              <div className="flex flex-row items-center gap-3">
                <h3 className="text-xl text-black font-bold">View Report</h3>
                <ListAltIcon className="text-black" style={{ fontSize: 28 }} />
              </div>
            </div>
            <div>
              <div className="text-black flex flex-col md:flex-row items-center justify-between py-5 text-center">
                <img src="images/meter-9-svgrepo-com.png" className="w-3/6" />
                <div className=" text-center md:text-right">
                  <h3 className="font-bold text-2xl text-black">
                    22% Increase
                  </h3>
                  <p className="text-2xl text-black">
                    in people searching for your brand name
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h3 className="text-2xl font-bold">
            Action items to build your brand
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-11">
          <div className="bg-[#f5f5f5] p-7 rounded-2xl lg:w-[50%]">
            <div className="flex flex-row items-center gap-3 py-4 border-b border-gray-500">
              <div className="h-14 w-14 rounded-full bg-[#537D3D]"></div>
              <div>
                <h4 className="text-xl font-bold">Item #1</h4>
                <p>AI suggestions based on stats and modules</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 py-4 border-b border-gray-500">
              <div className="h-14 w-14 rounded-full bg-[#E96B46]"></div>
              <div>
                <h4 className="text-xl font-bold">Item #2</h4>
                <p>AI suggestions based on stats and modules</p>
              </div>
            </div>
            <div className=" text-right">
              <button className="text-[#537D3D] font-bold py-5">
                See more details
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] flex flex-col gap-5">
            <div className="bg-[#f5f5f5] p-7 rounded-2xl">
              <h4 className="text-3xl font-bold pb-7">Return on Investment</h4>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-4 text-center">
                  <h5 className="text-xl">Conversions Rate</h5>
                  <h6 className="text-5xl font-bold">3.2%</h6>
                </div>
                <div className="flex flex-col gap-4 text-center">
                  <h5 className="text-xl">Conversions Rate</h5>
                  <h6 className="text-5xl font-bold">3.2%</h6>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-7 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <h4 className="text-2xl font-bold">Total AIR Used: 987/1000</h4>
                <button className="bg-[#00417E] text-white font-bold text-lg py-3 px-6 rounded-md">
                  UPGRADE
                </button>
              </div>
              <p className="text-black py-5 text-base">
                What is AI and how is it calculated?{" "}
                <Link className="text-[#00417E]">Learn more here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
