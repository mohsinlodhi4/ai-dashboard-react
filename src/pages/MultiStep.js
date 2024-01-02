import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getRequest, postRequest } from "../utils/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { isProtocol, isValidUrl, notifyError } from "../utils/helper";
export default function MultiStep() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: "",
    webUrl: ""
  });
  const [apiData, setApiData] = useState([])

  const [formData, setFormData] = useState({
    businessTitle: '',
    businessAddress: '',
    emails: '',
    contactDetails: '',
    socialLinks: '',
    additionalInformation: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { businessTitle, businessAddress, emails, contactDetails, socialLinks, additionalInformation } = formData
  const { webUrl } = state

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = (e) => {
    let value = e.target.value
    if (e.target.name == 'contactNumbers') {
      value = e.target.value.replace(/[^0-9]/g, '');
    }
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }
  const next = async () => {
    if (formNo === 1 && webUrl) {
      const inputUrl = isProtocol(webUrl)
      if (!isValidUrl(inputUrl, [inputUrl])) {
        notifyError("Invalid Url. Please enter valid url", "top-left")
      } else {
        const data = {
          webUrl: webUrl
        }
        setIsLoading(true)
        try {
          notifyError("Web url analyzing", "top-left")
          const res = await postRequest("http://localhost:5000/api/profile/submit-web-url", data)
          if (res.statusText == "OK") {
            setApiData(res?.data)
            // setFormData(res?.data?.data || {});
            setFormData({ businessAddress: res?.data?.data?.addresses, contactDetails: res?.data?.data?.contactNumbers } || {});
            setFormNo(formNo + 1);
          }
        } catch (error) {
          console.log("Error", error)
        } finally {
          setIsLoading(false)
        }
      }


    } else if (formNo === 2) {
      if (businessTitle == '' && businessAddress == '' && emails == '' && contactDetails == '' && socialLinks == '') {
        notifyError("Please fill required fields", "top-left")
      } else {
        try {
          const res = await postRequest('http://localhost:5000/api/profile/save', formData)
          if (res.statusText == "OK") {
            setFormNo(formNo + 1);
          }
        } catch (error) {
          console.log("ERROR", error)
        }
      }
      // setFormNo(formNo + 1);
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
        <h2 className="text-black font-bold text-4xl mb-5 mt-20">
          Welcome to AI Dashboard Let's get you set up.
        </h2>
        <div>
          {/* <ToastContainer /> */}
          {formNo === 1 && (
            <div>
              <div className="flex flex-col mb-2">
                <input
                  value={webUrl}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="webUrl"
                  placeholder="Enter your website address"
                  id="webUrl"
                />
              </div>
              <div className="mt-4 flex justify-center items-center">
                <button
                  onClick={next}
                  className={`px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2] 
                  ${isLoading ? 'disabled' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span
                      className="spinner-border spinner-border-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                  Next

                </button>
              </div>
            </div>
          )}

          {formNo === 2 && (
            <div>
              <div className="flex flex-col mb-2">

                <h4>Business Title</h4>
                <input
                  value={businessTitle}
                  onChange={(e) => { handleForm(e, 'businessTitle') }}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="businessTitle"
                  placeholder="Enter your businessTitle"
                  id="businessTitle"
                />
              </div>
              <div className="flex flex-col mb-2">
                <h4>Address</h4>
                <input
                  value={businessAddress}
                  onChange={(e) => { handleForm(e, 'businessAddress') }}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="businessAddress"
                  placeholder="Enter your address"
                  id="businessAddress"
                />
              </div>
              <div className="flex flex-col mb-2">
                <h4>Emails</h4>
                <input
                  value={emails}
                  onChange={(e) => { handleForm(e, 'emails') }}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="emails"
                  placeholder="Enter your email"
                  id="emails"
                />
              </div>
              <div className="flex flex-col mb-2">
                <h4>Contact Numbers</h4>
                <input
                  value={contactDetails}
                  onChange={(e) => { handleForm(e, 'contactDetails') }}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="phone"
                  name="contactDetails"
                  placeholder="Enter your contact Number"
                  id="contactDetails"
                />
              </div>
              <div className="flex flex-col mb-2">
                <h4>Social Links</h4>
                <input
                  value={socialLinks}
                  onChange={(e) => { handleForm(e, 'socialLinks') }}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="socialLinks"
                  placeholder="Enter your socialLinks"
                  id="socialLinks"
                />
              </div>
              <div className="flex flex-col mb-2">
                <h4>Additional Fields</h4>
                <textarea
                  value={additionalInformation}
                  onChange={(e) => { handleForm(e, 'additionalInformation') }}
                  className="p-2 border border-slate-400 mt-1 outline-0 h-36 text-slate-500 focus:border-blue-500 rounded-md"
                  type="text"
                  name="additionalInformation"
                  placeholder="Enter additional information"
                  id="additionalInformation"
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
