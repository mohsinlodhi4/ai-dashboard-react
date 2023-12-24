import React, { useState } from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForumIcon from "@mui/icons-material/Forum";
import PeopleIcon from "@mui/icons-material/People";
import { ColorPicker } from "primereact/colorpicker";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function Chatbot() {
  const [colorHEX, setColorHEX] = useState("6466f1");
  return (
    <div>
      {" "}
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-4xl">Chatbot</h1>
          </div>
          <div className="flex flex-1 flex-row gap-2 items-center justify-end">
            <div className="bg-blue-800 px-5 py-2 rounded-md">
              <h4 className="text-white font-bold">AIR used: 139</h4>
            </div>
            <HelpOutlineIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="flex flex-row items-center gap-8 border-b border-gray-400 py-8">
          <a href="#">
            <h3 className="text-xl font-bold">Settings</h3>
          </a>
          <a href="#">
            <h3 className="text-xl font-bold">Chat History</h3>
          </a>
          <a className="text-white bg-[#1E429F] px-5 py-2 rounded" href="#">
            <h3 className="text-xl font-bold">Share</h3>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="py-6 px-5 border-r border-gray-500 lg:w-[20%] flex flex-col gap-6">
            <div className="flex flex-row items-center gap-3">
              <div className="bg-[#F2F2F3] p-2 text-gray-500 rounded-md hover:bg-[#7267F0] hover:text-white">
                <DashboardIcon />
              </div>
              <div className="">
                <h3 className="text-sm font-bold">User Experience (UX)</h3>
                <p className="text-sm">Ul and UX of chatbot</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="bg-[#F2F2F3] p-2 text-gray-500 rounded-md hover:bg-[#7267F0] hover:text-white">
                <ForumIcon />
              </div>
              <div className="">
                <h3 className="text-sm font-bold">Conversation Settings</h3>
                <p className="text-sm">Control conversational behavior</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="bg-[#F2F2F3] p-2 text-gray-500 rounded-md hover:bg-[#7267F0] hover:text-white">
                <PeopleIcon />
              </div>
              <div className="">
                <h3 className="text-sm font-bold">Custom Persona</h3>
                <p className="text-sm">Customize how the chatbot behaves.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[80%] p-5">
            <div className="flex flex-row items-center gap-2 pb-5">
              <p className="font-bold text-base">Avatar</p>
              <HelpOutlineIcon style={{ fontSize: 18 }} />
            </div>
            <div className="flex flex-row items-center gap-5 pb-3">
              <div className="">
                <img
                  className="w-32 h-32 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="">
                <button className="bg-[#00417E] py-3 px-6 text-sm text-white rounded-md">
                  Upload new photo
                </button>
                <p className="text-sm py-4">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 pb-5">
              <p className="font-bold text-base">Chatbot Color</p>
              <HelpOutlineIcon style={{ fontSize: 18 }} />
            </div>
            <div>
              <div className="flex-1 flex gap-4 flex-column align-items-center justify-between rounded-md border p-2 w-60">
                <div className="w-5 h-5 rounded-full overflow-hidden">
                  <ColorPicker
                    inputId="cp-hex"
                    format="hex"
                    value={colorHEX}
                    onChange={(e) => setColorHEX(e.value)}
                  />
                </div>

                <span>{colorHEX}</span>
                <div className="pl-20">
                  <EditOutlinedIcon />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 py-5">
              <div className="flex flex-row items-center gap-2">
                <p className="font-bold text-base">Background Image</p>
                <HelpOutlineIcon style={{ fontSize: 18 }} />
              </div>
              <div>
                <button className="text-[#00417E]">Change image</button>
              </div>
            </div>
            <div>
              <img
                className="h-52 object-cover w-full rounded-md"
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="flex flex-row items-center gap-2 py-5">
              <p className="font-bold text-base">Chatbot Color</p>
              <HelpOutlineIcon style={{ fontSize: 18 }} />
            </div>
            <div>
              <div className="relative">
                <textarea
                  id="hs-textarea-ex-1"
                  className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Ask me anything..."
                ></textarea>

                <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white ">
                  <div className="flex justify-end items-center">
                    <div className="flex items-center gap-x-1">
                      <button
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                      >
                        <svg
                          className="flex-shrink-0 h-3.5 w-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 py-5">
              <div className="flex flex-row items-center gap-2">
                <p className="font-bold text-base">Examples questions</p>
                <HelpOutlineIcon style={{ fontSize: 18 }} />
              </div>
              <div>
                <button className="text-[#00417E]">Add New</button>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="font-bold text-base">
                Citations: 'Where did this answer come from?'
              </p>
              <HelpOutlineIcon style={{ fontSize: 18 }} />
            </div>
            <div>
              <button className="border rounded-md py-3 px-7 my-5">
                You can learn more about from pages and
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
