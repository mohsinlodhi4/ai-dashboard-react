import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
import { logout } from "../../utils/functions";

export default function Sidebar() {
  return (
    <div>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <li className="py-3" ne x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>

          <ol
            className="ms-3 flex items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center  text-gray-800 ">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className=" font-semibold text-gray-800 truncate "
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>

      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-[92px] start-0 bottom-0 z-[60] w-1/5 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 "
      >
        <div className="flex flex-col h-full items-center justify-between">
          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul>
              <li>
                <Link to="/dashboard">
                  <span
                    className="flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <DashboardIcon className="text-black" />
                    Dashboard
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/chatbot">
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <ChatBubbleIcon className="text-black" />
                    Chatbot
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/content-writing">
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <NoteAltIcon className="text-black" />
                    Writing
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/imageandvideo">
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <CollectionsIcon className="text-black" />
                    Images & Video
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/digital-ads">
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <NotificationsIcon className="text-black" />
                    Digital Ads
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/analytics">
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <BarChartIcon className="text-black" />
                    Analytics
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul>
              <li>
                <Link to="/profile">
                  <span
                    className="flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <AccountCircleIcon className="text-black" />
                    Profile
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/Setting">
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <SettingsIcon className="text-black" />
                    Settings
                  </span>
                </Link>
              </li>
              <li>
                <span
                  className="cursor-pointer w-full flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                  onClick={logout}
                >
                  <LogoutIcon className="text-black" />
                  Logout
                </span>
              </li>
              <li>
                <Link to="/help">
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-3  text-[#8a8a8a] text-base rounded-lg hover:bg-gray-100 "
                    href="#"
                  >
                    <HelpIcon className="text-black" />
                    Help
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
