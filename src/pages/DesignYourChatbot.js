import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";

export default function DesignYourChatbot() {
  return (
    <div className=" bg-gray-100 flex md:flex-row items-center flex-col">
      <div className="md:w-[50%] p-20 h-[100vh]">
        <div>
          <h3 className="text-3xl font-bold py-3">Design your Chatbot</h3>
          <p>You can always change these later</p>
        </div>
        <div className="flex flex-row items-center gap-2 pt-7 pb-2">
          <p>Choose a cover image:</p>
          <InfoIcon className="text-gray-500" />
        </div>
        <div className="flex flex-row items-center gap-5">
          <button className="flex flex-row items-center gap-3 border-black border py-3 px-5">
            <ShuffleIcon />
            Shuffle image
          </button>
          <button className="flex flex-row items-center gap-3 border-black border py-3 px-5">
            <ImageIcon />
            Shuffle image
          </button>
        </div>
        <div>
          <p className="font-bold text-black py-5">Choose a chat icon</p>
          <div className="flex flex-row items-center gap-3">
            <button>
              <img src="images/Screenshot_1.png" />
            </button>
            <button>
              <img src="images/Screenshot_2.png" />
            </button>
            <p className="bg-[#EBA300] text-white font-bold py-2 px-3 rounded-lg">
              GOLD
            </p>
          </div>
          <p className="py-3">24x24px PNGs or JPGs work best</p>
        </div>
        <div className="pt-8">
          <label className="text-black font-bold pb-3">
            Chat placeholder text
          </label>
          <form className="pt-4">
            <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 ">
              <textarea
                id="chat"
                rows="1"
                class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 d"
                placeholder="Your message..."
              ></textarea>
              <button
                type="submit"
                class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 "
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
        </div>
        <div className="pt-8">
          <p className="text-black font-bold pb-5">Who can use the Chatbot?</p>
          <div class="flex pb-2">
            <input
              type="radio"
              name="hs-default-radio"
              class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              id="hs-default-radio"
            />
            <label for="hs-default-radio" class="text-base text-black ms-2 ">
              Private
            </label>
          </div>
          <div class="flex pb-2">
            <input
              type="radio"
              name="hs-default-radio"
              class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              id="hs-default-radio"
            />
            <label for="hs-default-radio" class="text-base text-black ms-2 ">
              Unlisted
            </label>
          </div>
          <div class="flex pb-2">
            <input
              type="radio"
              name="hs-default-radio"
              class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              id="hs-checked-radio"
              checked
            />
            <label for="hs-checked-radio" class="text-base text-black ms-2 ">
              Public
            </label>
          </div>
        </div>
        <div className="pt-8">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Clone-able
            </span>
          </label>
        </div>
      </div>
      <div className="md:w-[50%] bg-[#F6F8FA] p-20 h-[100vh]">
        <div>
          <p className="text-base text-gray-600 font-bold pb-5">FORM PREVIEW</p>
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-7 pb-10">
          <div>
            <img
              src="https://images.unsplash.com/photo-1704146087769-ba4d31543936?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-40 h-40 rounded-full object-cover border-2 border-black"
            />
          </div>
          <div>
            <h3 className="text-black font-bold text-2xl">BY ROPEG</h3>
            <h2 className="text-black font-bold text-4xl">
              CleanBot Customer Support
            </h2>
            <h4 className="text-black text-3xl">
              Answers questions about CleanBots products.
            </h4>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="md:w-[10%]">
            <img
              src="images/Screenshot_1.png"
              className="w-14 h-14 object-cover"
            />
          </div>
          <div>
            <p className="bg-blue-200 p-5 rounded-lg">
              Welcome to Rob's Killer Robots Customer Support! My name is Zeke,
              and I'm here to help you with any questions, concerns, or issues
              related to our products and services. Please feel free to share
              your inquiry, and I'll do my best to assist you promptly and
              efficiently.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between bg-white rounded-md p-3 my-16">
          <p>What would you like to talk about?</p>
          <SendIcon />
        </div>
        <div className="py-5 text-right pr-5">
            <Link to="/createchatbot">
              <button className="bg-[#1E429F] text-white py-3 mr-3 px-5 rounded-full">
                Back to Edit
              </button>
            </Link>
            <Link to="/chatbot">
              <button className="bg-[#1E429F] text-white py-3 px-5 rounded-full">
                Publish
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
}
