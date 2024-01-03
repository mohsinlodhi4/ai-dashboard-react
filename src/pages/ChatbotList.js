import React from "react";
import Header from "../components/Dashboardcomponents/Header";
import Sidebar from "../components/Dashboardcomponents/Sidebar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function ChatBotList() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-4xl">Chat Bots</h1>
          </div>
          <div className="flex flex-1 flex-row gap-2 items-center justify-end">
            <div className="bg-blue-800 px-5 py-2 rounded-md">
              <h4 className="text-white font-bold">AIR used: 139</h4>
            </div>
            <HelpOutlineIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-end mb-8">
            <Link
              to={"/createchatbot"}
              className="flex flex-row items-center gap-2 bg-[#F85727] text-white py-2 px-6 rounded"
            >
              Create Chatbot
              <AddIcon />
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 border-b-[1px] pb-3 border-gray-300 mt-4 mx-3">
            <div className="lg:w-[70%]">
              <h4 className="text-[12px] font-bold text-black">
                Name
              </h4>
            </div>
            <div className="flex flex-row items-center gap-2 lg:w-[10%] ">
              <p className="text-[12px]">Runs Today</p>
              <InfoIcon style={{ fontSize: 15 }} />
            </div>
            <div className="flex flex-row items-center gap-2 lg:w-[10%]">
              <p className="text-[12px]">Runs Total</p>
              <InfoIcon style={{ fontSize: 15 }} />
            </div>
            <div className="lg:w-[10%]"></div>
          </div>
          <div className="">
            <div
              id="tabs-with-underline-1"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-1"
            >
                {/* Row start */}
              <div className="flex flex-col lg:flex-row items-center gap-5 py-7 border-b-[1px] border-gray-300  mx-3">
                <div className="lg:w-[70%]">
                  <h4 className="text-sm font-semibold pb-2  text-black">
                    Customer Support Bot
                  </h4>
                  {/* <div className="flex flex-row items-center gap-3">
                    <button className="p-1 text-[10px] font-semibold text-[#F85727] border border-[#F85727] rounded">
                      online presence
                    </button>
                    <button className="p-1 text-[10px] font-semibold text-[#F85727] border border-[#F85727] rounded">
                      online presence
                    </button>
                    <button className="p-1 text-[10px] font-semibold text-[#F85727] border border-[#F85727] rounded">
                      online presence
                    </button>
                    <button className="p-1 text-[10px] font-semibold text-[#F85727] border border-[#F85727] rounded">
                      online presence
                    </button>
                  </div> */}
                </div>
                <div className="flex flex-row items-center gap-2 lg:w-[10%] ">
                  <p className="text-sm bg-green-600 text-white p-2 rounded-md">
                    26
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2 lg:w-[10%]">
                  <p className="text-sm">1.6K</p>
                </div>
                <div className="lg:w-[10%]">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <div className="p-2 bg-[#F85727] text-white rounded-lg ">
                      <EditIcon style={{ fontSize: 15 }} />
                    </div>
                    <div className="p-2 bg-[#ECECEC] text-black rounded-lg ">
                      <DeleteIcon style={{ fontSize: 15 }} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Row end */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
