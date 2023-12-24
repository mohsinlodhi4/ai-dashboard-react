import React from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Digitalads() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-4xl">Digital Ads</h1>
          </div>
          <div className="flex flex-1 flex-row gap-2 items-center justify-end">
            <div className="bg-blue-800 px-5 py-4 rounded-md">
              <h4 className="text-white font-bold">AIR used: 139</h4>
            </div>
            <HelpOutlineIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="py-5">
          <ul className="flex-row flex gap-5">
            <li>
              <a className="text-black font-bold text-lg" href="#">
                Awareness
              </a>
            </li>
            <li>
              <a className="text-black font-bold text-lg" href="#">
                Consideration
              </a>
            </li>
            <li>
              <a className="text-black font-bold text-lg" href="#">
                Porchase
              </a>
            </li>
            <li>
              <a className="text-black font-bold text-lg" href="#">
                Retention
              </a>
            </li>
            <li>
              <a className="text-black font-bold text-lg" href="#">
                Saved
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
          <div className="w-2/6 pb-8">
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
        <div className="my-8">
          <h3 className="text-black font-bold text-2xl mb-10">
            Ad CopySuggestions
          </h3>
        </div>
        <div className="mb-7">
          <h4 className="text-black text-2xl mb-4">
            <span className="font-bold">Title: </span>Ai generated
          </h4>
          <h4 className="text-black text-2xl mb-4">
            <span className="font-bold">Description: </span>Ai generated
          </h4>

          <div className="flex flex-col md:flex-row gap-5 items-center">
            <a className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]">
              <ContentCopyIcon />
              Copy
            </a>
            <a className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]">
              <FavoriteIcon />
              Save
            </a>
            <a className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]">
              <AddBoxIcon />
              More Like This
            </a>
            <a className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]">
              <CancelIcon />
              Remove
            </a>
            <p>2 words / 13 Chars</p>
            <a className="bg-[#00417e]  rounded-md py-3 px-8 font-bold text-white">
              Add Image
            </a>
          </div>
        </div>
        <div className="mb-7">
          <h4 className="text-black text-2xl mb-4">
            <span className="font-bold">Title: </span>Ai generated
          </h4>
          <h4 className="text-black text-2xl mb-4">
            <span className="font-bold">Description: </span>Ai generated
          </h4>

          <div className="flex flex-col md:flex-row gap-5 items-center">
            <a className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]">
              <ContentCopyIcon />
              Copy
            </a>
            <a className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]">
              <FavoriteIcon />
              Save
            </a>
            <a className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]">
              <AddBoxIcon />
              More Like This
            </a>
            <a className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]">
              <CancelIcon />
              Remove
            </a>
            <p>2 words / 13 Chars</p>
            <a className="bg-[#00417e]  rounded-md py-3 px-8 font-bold text-white">
              Add Image
            </a>
          </div>
        </div>
        <div className="mb-7">
          <h4 className="text-black text-2xl mb-4">
            <span className="font-bold">Title: </span>Ai generated
          </h4>
          <h4 className="text-black text-2xl mb-4">
            <span className="font-bold">Description: </span>Ai generated
          </h4>

          <div className="flex flex-col md:flex-row gap-5 items-center">
            <a
              href="#"
              className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]"
            >
              <ContentCopyIcon />
              Copy
            </a>
            <a
              href="#"
              className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]"
            >
              <FavoriteIcon />
              Save
            </a>
            <a
              href="#"
              className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]"
            >
              <AddBoxIcon />
              More Like This
            </a>
            <a
              href="#"
              className=" flex flex-row gap-2 items-center border-x border-y border-[#211150] rounded-md py-3 px-8 font-bold text-[#211150]"
            >
              <CancelIcon />
              Remove
            </a>
            <p>2 words / 13 Chars</p>
            <a
              href="#"
              className="bg-[#00417e]  rounded-md py-3 px-8 font-bold text-white"
            >
              Add Image
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
