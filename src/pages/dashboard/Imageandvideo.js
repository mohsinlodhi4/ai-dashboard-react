import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";

export default function Imageandvideo() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-4xl">Image & Video</h1>
          </div>
          <div className="flex flex-1 flex-row gap-2 items-center justify-end">
            <div className="bg-blue-800 px-5 py-4 rounded-md">
              <h4 className="text-white font-bold">AIR used: 139</h4>
            </div>
            <HelpOutlineIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-5 my-5">
          <a className="font-bold text-xl" href="#">
            Image Suggestions
          </a>
          <a className="font-bold text-xl" href="#">
            Image History
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="">
            <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="flex flex-row items-center justify-center gap-6 my-5">
              <a className="font-semibold text-lg" href="#">
                Download
              </a>
              <a className="font-semibold text-lg" href="#">
                Modify
              </a>
            </div>
          </div>
          <div className="">
            <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="flex flex-row items-center justify-center gap-6 my-5">
              <a className="font-semibold text-lg" href="#">
                Download
              </a>
              <a className="font-semibold text-lg" href="#">
                Modify
              </a>
            </div>
          </div>
          <div className="">
            <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="flex flex-row items-center justify-center gap-6 my-5">
              <a className="font-semibold text-lg" href="#">
                Download
              </a>
              <a className="font-semibold text-lg" href="#">
                Modify
              </a>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h3 className="font-bold text-2xl mb-5">Create a New Image</h3>
          <input
            className="w-full p-3 text-lg border rounded"
            type="text"
            name="Search_text"
            placeholder="Type what you want to create"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="">
            <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="flex flex-row items-center justify-center gap-6 my-5">
              <a className="font-semibold text-lg" href="#">
                Download
              </a>
              <a className="font-semibold text-lg" href="#">
                Modify
              </a>
            </div>
          </div>
          <div className="">
            <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="flex flex-row items-center justify-center gap-6 my-5">
              <a className="font-semibold text-lg" href="#">
                Download
              </a>
              <a className="font-semibold text-lg" href="#">
                Modify
              </a>
            </div>
          </div>
          <div className="">
            <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="flex flex-row items-center justify-center gap-6 my-5">
              <a className="font-semibold text-lg" href="#">
                Download
              </a>
              <a className="font-semibold text-lg" href="#">
                Modify
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
