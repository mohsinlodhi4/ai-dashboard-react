import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import BoltIcon from "@mui/icons-material/Bolt";
import CachedIcon from "@mui/icons-material/Cached";
import { Link } from "react-router-dom";

export default function CreateChatBot() {
  return (
    <div className=" bg-gray-100 flex md:flex-row items-center flex-col h-[100vh]">
      <div className="md:w-[50%] p-10">
        <div className="flex flex-grow items-center gap-2">
          <p className="text-gray-500">PROMPT FRAME</p>
          <InfoIcon className="text-gray-500" />
        </div>
        <div>
          <h3 className="text-3xl font-bold py-3">Create your Chatbot</h3>
          <p>
            Write a persona for your chatbot in the “Role” box. Test it live in
            the right panel. You can read a full walkthrough of our chatbot
            builder here.
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 pt-7 pb-2">
          <SettingsIcon />
          <p>ROLE</p>
          <InfoIcon className="text-gray-500" />
        </div>
        <div>
          <textarea
            className="w-full h-36"
            placeholder="Describe what your bot does and how it does it"
          ></textarea>
        </div>
        <div className="flex flex-row items-center gap-2 pt-10 pb-4">
          <FilePresentIcon />
          <p>KNOWLEDGE BASE</p>
        </div>
        <div>
          <input type="file" />
        </div>
        <div className="flex flex-row items-center gap-2 pt-10 pb-4">
          <BoltIcon />
          <p>TRAINING DIALOGUE</p>
        </div>
        <div className="border border-black">
          <input
            type="text"
            placeholder="Example query"
            className="w-full border-0"
          />
          <input
            type="text"
            placeholder="Example response"
            className="w-full border-0 bg-blue-200"
          />
        </div>
        <div className="flex flex-row items-center gap-2 pt-10 pb-4">
          <BoltIcon />
          <p>INTRO MESSAGE</p>
        </div>
        <div>
          <textarea
            className="w-full h-36"
            placeholder="Example intro message"
          ></textarea>
        </div>
      </div>
      <div className="md:w-[50%] bg-[#F6F8FA] p-10 h-[100vh] flex flex-col justify-between">
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between pb-8">
            <div className="flex flex-row items-center gap-2">
              <p className="text-gray-500">CHAT PREVIEW</p>
              <InfoIcon className="text-gray-500" />
            </div>
            <div>
              <button className="flex flex-row items-center gap-2">
                Clear Chat
                <CachedIcon />
              </button>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Untitled Pickaxe"
              className="text-3xl w-full border-b-2 border-0 font-bold bg-transparent"
            />
            <input
              type="text"
              placeholder="Describe your Pickaxe to users here [optional]"
              className="text-xl w-full border-b-2 border-0 font-bold bg-transparent"
            />
          </div>
        </div>
        <div>
          <form>
            <label for="chat" class="sr-only">
              Your message
            </label>
            <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea
                id="chat"
                rows="1"
                class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <button
                type="submit"
                class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <svg
                  class="w-5 h-5 rotate-90 rtl:-rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
                <span class="sr-only">Send message</span>
              </button>
            </div>
          </form>
          <div className="py-5 text-right pr-5">
            <Link to="/designchatbot">
              <button className="bg-[#1E429F] text-white py-3 px-5 rounded-full">
                Next Step
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
