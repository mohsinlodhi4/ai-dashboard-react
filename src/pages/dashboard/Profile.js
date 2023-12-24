import React from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";

export default function Profile() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8">
          <h1 className="font-bold text-4xl">Business Profile</h1>
        </div>
        <div className="">
          <h3 className="font-bold text-2xl mb-6">Step 1</h3>
          <form>
            <div className="mb-4">
              <label
                for="hs-feedback-post-comment-name-1"
                className="block mb-2 text-lg font-medium "
              >
                Enter your website address
              </label>
              <input
                type="text"
                id="hs-feedback-post-comment-name-1"
                className="py-3 px-4 block w-full border rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                placeholder="Enter your website address
                "
              />
            </div>
            <h3 className="font-bold text-2xl mb-6">Step 2</h3>
            <div className="mb-4">
              <label
                for="hs-feedback-post-comment-email-1"
                className="block mb-2 text-lg font-medium "
              >
                Review the below Information to ensure accuracy
              </label>
              <textarea
                id="hs-feedback-post-comment-textarea-1"
                name="hs-feedback-post-comment-textarea-1"
                rows="6"
                className="py-3 px-4 block w-full border rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                placeholder="Review the below Information to ensure accuracy
                "
              ></textarea>
            </div>
            <h3 className="font-bold text-2xl mb-6">Step 3</h3>
            <div className="mb-4">
              <label
                for="hs-feedback-post-comment-name-1"
                className="block mb-2 text-lg font-medium "
              >
                Upload your Banding
              </label>
              <input
                type="text"
                id="hs-feedback-post-comment-name-1"
                className="py-3 px-4 block w-full border rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                placeholder="Logo, fonts, colours, style guide etc."
              />
            </div>
            <h3 className="font-bold text-2xl mb-6">Step 4</h3>
            <div className="mb-4">
              <label
                for="hs-feedback-post-comment-email-1"
                className="block mb-2 text-lg font-medium "
              >
                Initgrate your current digital tools
              </label>
              <textarea
                id="hs-feedback-post-comment-textarea-1"
                name="hs-feedback-post-comment-textarea-1"
                rows="6"
                className="py-3 px-4 block w-full border rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                placeholder="List all potential tool integrations (GA4, console, Ads, WordPress, Social etc."
              ></textarea>
            </div>

            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
