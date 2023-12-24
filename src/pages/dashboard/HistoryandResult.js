import React from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

export default function HistoryandResult() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-4xl">Content Writing</h1>
          </div>
          <div className="flex flex-1 flex-row gap-2 items-center justify-end">
            <div className="bg-blue-800 px-5 py-2 rounded-md">
              <h4 className="text-white font-bold">AIR used: 139</h4>
            </div>
            <HelpOutlineIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="flex flex-row items-center gap-10 mb-7">
          <Link to="/content-writing">
            <span>
              <h3 className="text-xl font-bold">Content Suggestions</h3>
            </span>
          </Link>
          <Link to="/history-result">
            <span>
              <h3 className="text-xl font-bold">History & Results</h3>
            </span>
          </Link>
        </div>

        <div className="bg-[#f5f5f5] p-8 rounded-2xl h-[70vh]">
          <p className="text-black text-lg pb-5">
            This section shows all past articles that were saved along with
            results from GA4. The article name should be clickable to view the
            full article within this module.
          </p>
          <p className="text-black text-lg pb-5">
            Article Name - Number of Views
          </p>
          <p className="text-black text-lg pb-5">
            Article Name - Number of Views
          </p>
          <p className="text-black text-lg pb-5">
            Article Name - Number of Views
          </p>
          <p className="text-black text-lg pb-5">
            Article Name - Number of Views
          </p>
          <p className="text-black text-lg pb-5">
            Article Name - Number of Views
          </p>
          <p className="text-black text-lg pb-5">
            Article Name - Number of Views
          </p>
          <p className="text-black text-lg pb-5">
            Article Name - Number of Views
          </p>
          <p className="text-black text-lg pb-5">
            Article Name - Number of Views
          </p>
        </div>
      </div>
    </div>
  );
}
