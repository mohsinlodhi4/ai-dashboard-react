import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function Header() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-black border-b text-sm py-2.5 sm:py-5 ">
      <nav
        className="flex lg:flex-row gap-3 flex-col basis-full items-center justify-between w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="me-5 lg:me-0 ">
          <a className="flex-none  text-white text-xl font-semibold ">
            SoftwareBrand Logo
          </a>
        </div>
        <div className="hidden sm:block">
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
                    className="py-3 px-12 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
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

        <div className="flex flex-row items-center justify-end gap-5">
          <div className="">
            <h3 className="text-white font-bold text-lg">Business Name</h3>
          </div>
          <div>
            <button
              id="hs-dropdown-with-header"
              type="button"
              className="w-[30px] h-[30px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
            >
              <img
                className="inline-block h-[30px] w-[30px] rounded-full ring-2 ring-white "
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
