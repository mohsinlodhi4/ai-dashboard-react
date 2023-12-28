import React from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";

export default function Setting() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8">
          <h1 className="font-bold text-4xl">Settings</h1>
        </div>
        <div className="">
          <ul>
            <li className="pb-7">
              <a className="text-black text-xl font-semibold" href="#">
                Billing
              </a>
            </li>
            <li className="pb-7">
              <a className="text-black text-xl font-semibold" href="#">
                Plan Upgrade
              </a>
            </li>
            <li className="pb-7">
              <a className="text-black text-xl font-semibold" href="#">
                Security
              </a>
            </li>
            <li className="pb-7">
              <a className="text-black text-xl font-semibold" href="#">
                Username and email
              </a>
            </li>
            <li className="pb-7">
              <a className="text-black text-xl font-semibold" href="#">
                Communication preferences
              </a>
            </li>
            <li className="pb-7">
              <a className="text-black text-xl font-semibold" href="#">
                Etc
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
