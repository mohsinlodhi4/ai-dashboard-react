import React from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function Help() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8">
          <h1 className="font-bold text-4xl">Help</h1>
        </div>
        <div className="">
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
          <div className="h-[600px] flex flex-row bg-[#f5f5f5] p-4 text-center justify-center rounded-xl items-center">
            <h2 className="font-bold text-4xl text-center">FAQ</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
