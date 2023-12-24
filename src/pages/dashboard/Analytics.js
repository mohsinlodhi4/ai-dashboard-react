import React from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function Analytics() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-4xl">Analytics</h1>
          </div>
          <div className="flex flex-1 flex-grow gap-2 justify-center">
            <CalendarMonthIcon />
            <h3 className="text-lg font-bold">Jan 1, 2023 - Feb 1, 2023</h3>
          </div>
          <div className="flex flex-1 flex-row gap-2 items-center justify-end">
            <div className="bg-blue-800 px-5 py-4 rounded-md">
              <h4 className="text-white font-bold">AIR used: 139</h4>
            </div>
            <HelpOutlineIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
          <div>
            <h3 className="text-black font-bold text-2xl mb-4">Overview</h3>
            <p className="text-lg">AI analysis of results</p>
          </div>
          <div className="w-2/4 pb-8">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <SearchIcon className="text-gray-400" />
              </div>
              <form>
                <div className=" flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-12 block w-full border-gray-200 border rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Search for answers"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <AddIcon className="text-white" />
                    </div>
                    <a
                      className="w-full sm:w-auto whitespace-nowrap py-3 px-12 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-[#537d3d] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                      href="#"
                    >
                      Search
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="my-14">
          <h3 className="text-black font-bold text-2xl mb-4">
            Recommendations
          </h3>
          <p className="text-lg">
            AIrecommendations based on google integrations and data from other
            modules
          </p>
        </div>
        <div className="bg-[#f5f5f5] rounded-xl p-10 h-96">
          <h3 className="font-bold text-2xl mb-5">DetailedStats</h3>
          <p className="text-lg">
            Include: total web traffic, traffic by source, total organic web
            traffic, Conversions by name, Top 10 visited pages,, top referring
            cities, devices and space for a few more blocks to be added.
          </p>
        </div>
      </div>
    </div>
  );
}
