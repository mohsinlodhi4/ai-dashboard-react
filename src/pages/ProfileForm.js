import React from "react";
import { Link } from "react-router-dom";

export default function ProfileForm() {
  return (
    <div className="h-screen">
      <div className=" bg-gray-100 flex h-full items-center py-16">
        <div className="w-full max-w-[40%] mx-auto p-6">
          <div className=" bg-white border border-gray-200 rounded-xl shadow-sm ">
            <form>
              <div class="bg-white rounded-xl shadow ">
                <div class="p-12">
                  <div class="space-y-4 sm:space-y-6">
                    <div class="space-y-2">
                      <label
                        for="af-submit-app-project-name"
                        class="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                      >
                        Country
                      </label>

                      <select
                        id="af-submit-app-category"
                        class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
                      >
                        <option selected>USA</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div class="space-y-2">
                      <label
                        for="af-submit-app-project-name"
                        class="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                      >
                        Language
                      </label>

                      <select
                        id="af-submit-app-category"
                        class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
                      >
                        <option selected>USA</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div class="space-y-2">
                      <label
                        for="af-submit-project-url"
                        class="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                      >
                        Business Name
                      </label>

                      <input
                        id="af-submit-project-url"
                        type="text"
                        class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
                        placeholder="Your Business Name"
                      />
                    </div>

                    <div class="space-y-2">
                      <label
                        for="af-submit-project-url"
                        class="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                      >
                        Business URL
                      </label>

                      <input
                        id="af-submit-project-url"
                        type="text"
                        class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
                        placeholder="https://example.so"
                      />
                    </div>
                  </div>

                  <div class="mt-5 text-center gap-x-2">
                    <Link to="/dashborad">
                      <button
                        type="button"
                        class="py-3 w-full px-4  gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
