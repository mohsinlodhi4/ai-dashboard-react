import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MultiStep() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (formNo === 1 && state.name) {
      setFormNo(formNo + 1);
    } else if (formNo === 2 && state.varsity) {
      setFormNo(formNo + 1);
    } else if (formNo === 3 && state.logo) {
      setFormNo(formNo + 1);
    } else {
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
    } else {
    }
  };
  return (
    <div className=" bg-gray-100 flex md:flex-row items-center flex-col h-[100vh]">
      <div className="md:w-[50%] p-10">
        <h2 className="text-black font-bold text-4xl mb-5">
          Welcome to AI Dashboard Let's get you set up.
        </h2>
        <div>
          {formNo === 1 && (
            <div>
              <div className="flex flex-col mb-2">
                <input
                  value={state.name}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="name"
                  placeholder="Enter your website address"
                  id="name"
                />
              </div>
              <div className="mt-4 flex justify-center items-center">
                <button
                  onClick={next}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2]"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {formNo === 2 && (
            <div>
              <div className="flex flex-col mb-2">
                <textarea
                  value={state.varsity}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 h-36 text-slate-500 focus:border-blue-500 rounded-md"
                  type="text"
                  name="varsity"
                  placeholder="Review the below Information to ensure accuracy"
                  id="varsity"
                />
              </div>
              <div className="mt-4 gap-3 flex justify-center items-center">
                <button
                  onClick={pre}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2]"
                >
                  Previous
                </button>
                <button
                  onClick={next}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2]"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {formNo === 3 && (
            <div>
              <div className="flex flex-col mb-2">
                <label>Upload your Banding</label>
                <input
                  value={state.logo}
                  onChange={inputHandle}
                  className="mt-1  "
                  type="file"
                  accept="image/png, image/jpeg"
                  name="logo"
                  id="logo"
                />
              </div>
              <div className="mt-4 gap-3 flex justify-center items-center">
                <button
                  onClick={pre}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2]"
                >
                  Previous
                </button>
                <button
                  onClick={next}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2]"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {formNo === 4 && (
            <div>
              <div className="flex flex-col mb-2">
                <label htmlFor="district">
                  Initgrate your current digital tools
                </label>
                <textarea
                  value={state.district}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0  h-36 focus:border-blue-500 rounded-md"
                  name="district"
                  placeholder="Initgrate your current digital tools
                  "
                  id="district"
                />
              </div>
              <div className="mt-4 gap-3 flex flex-row justify-center items-center">
                <button
                  onClick={pre}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2]"
                >
                  Previous
                </button>
                <Link className="w-full" to="/createchatbot">
                  <button
                    onClick={finalSubmit}
                    className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2]"
                  >
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-[50%]">
        <img
          src="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="h-[100vh] w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
