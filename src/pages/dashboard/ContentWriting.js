import React from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function ContentWriting() {
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
        <div className="">
          <h4 className="font-bold text-lg my-5">Categories</h4>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-black hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                id="tabs-with-underline-item-1"
                data-hs-tab="#tabs-with-underline-1"
                aria-controls="tabs-with-underline-1"
                role="tab"
              >
                Comparison
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-blue-600 hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-2"
                data-hs-tab="#tabs-with-underline-2"
                aria-controls="tabs-with-underline-2"
                role="tab"
              >
                Custom
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-blue-600 hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                ICP
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-blue-600 hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                July 4
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-blue-600 hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                Marketing
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-blue-600 hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                Mission
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-blue-600 hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                Product
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-blue-600 hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                Prompts
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold font-bold hs-tab-active:border-blue-600 hs-tab-active:text-black py-2 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-black hover:text-[#F95829] focus:border-b-2 focus:text-[#F95829] disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                SEO
              </button>
            </nav>
            <a
              href="#"
              className="flex flex-row items-center gap-2 bg-[#F85727] text-white py-2 px-6 rounded"
            >
              Add Topic
              <AddIcon />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 border-b-[1px] pb-3 border-gray-300 mt-4 mx-3">
            <div className="lg:w-[70%]">
              <h4 className="text-[12px] font-bold text-black">
                Speedy's Topic Recommendations
              </h4>
            </div>
            <div className="flex flex-row items-center gap-2 lg:w-[10%] ">
              <p className="text-[12px]">KD</p>
              <InfoIcon style={{ fontSize: 15 }} />
            </div>
            <div className="flex flex-row items-center gap-2 lg:w-[10%]">
              <p className="text-[12px]">Volume</p>
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
              <div className="flex flex-col lg:flex-row items-center gap-5 py-7 border-b-[1px] border-gray-300  mx-3">
                <div className="lg:w-[70%]">
                  <h4 className="text-sm font-semibold pb-2  text-black">
                    The Importance of Establishing a Strong Online Presence for
                    Small Businesses
                  </h4>
                  <div className="flex flex-row items-center gap-3">
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
                  </div>
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
              <div className="flex flex-col lg:flex-row items-center gap-5 py-7 border-b-[1px] border-gray-300  mx-3">
                <div className="lg:w-[70%]">
                  <h4 className="text-sm font-semibold pb-2  text-black">
                    The Importance of Establishing a Strong Online Presence for
                    Small Businesses
                  </h4>
                  <div className="flex flex-row items-center gap-3">
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
                  </div>
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
              <div className="flex flex-col lg:flex-row items-center gap-5 py-7 border-b-[1px] border-gray-300  mx-3">
                <div className="lg:w-[70%]">
                  <h4 className="text-sm font-semibold pb-2  text-black">
                    The Importance of Establishing a Strong Online Presence for
                    Small Businesses
                  </h4>
                  <div className="flex flex-row items-center gap-3">
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
                  </div>
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
              <div className="flex flex-col lg:flex-row items-center gap-5 py-7 border-b-[1px] border-gray-300  mx-3">
                <div className="lg:w-[70%]">
                  <h4 className="text-sm font-semibold pb-2  text-black">
                    The Importance of Establishing a Strong Online Presence for
                    Small Businesses
                  </h4>
                  <div className="flex flex-row items-center gap-3">
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
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
