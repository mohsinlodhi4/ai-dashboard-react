import React, { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { getRequest, postRequest } from "../utils/api";
import { isProtocol, isValidUrl, notifySuccess, notifyError } from "../utils/functions";
import './Multistep.css';
import { setUser } from "@/redux/authReducer/authSlice";
import { useSelector, useDispatch } from "react-redux";

export default function MultiStep() {
  const navigate = useNavigate();
  const formArray = [1, 2, 3];
  const dispatch = useDispatch();
  const [formNo, setFormNo] = useState(formArray[0]);
  const user = useSelector(state=> state.auth.user)  
  const [apiData, setApiData] = useState([])

  const [formData, setFormData] = useState({
    webUrl: '',
    businessTitle: '',
    businessDescription: '',
    businessAddress: '',
    emails: '',
    contactDetails: '',
    socialLinks: '',
    additionalInformation: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { webUrl, businessTitle, businessDescription, businessAddress, emails, contactDetails, socialLinks, additionalInformation } = formData

  const loadProfileData = async () => {
    try {
      let resp = await getRequest(process.env.REACT_APP_API_URL + '/api/profile/');
      if(resp?.data?.data) {
        setFormData(resp.data?.data);
      }
    }catch(e){
      console.log("error", e);
    }
  }
  const inputHandle = (e) => {
    setFormData({
      ...formData,
      path: e.target.value,
      url: e.target.baseURI,
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
          notifySuccess("Analyzing Web Url", "top-left")
          const res = await postRequest(process.env.REACT_APP_API_URL + "/api/profile/submit-web-url", data)
          if (res.statusText == "OK") {
            setApiData(res?.data)
            // setFormData(res?.data?.data || {});
            setFormData({
              ...formData,
              businessTitle: res?.data?.data?.businessTitle,
              businessDescription: res?.data?.data?.businessDescription,
              businessAddress: res?.data?.data?.addresses,
              emails: res?.data?.data?.emails,
              contactDetails: res.data.data.contactNumbers,
              socialLinks: [res.data.data.socialLinks],
            });
            setFormNo(formNo + 1);
          }
        } catch (error) {
          console.log("Error", error)
        } finally {
          setIsLoading(false)
        }
      }


    } else if (formNo === 2) {
      // if (businessTitle == '' || businessAddress == '' || emails == '' || contactDetails == '' || socialLinks == '') {
      if (businessTitle == '' ) {
        // notifyError("Please fill required fields", "top-left")
        notifyError("Business title is required", "top-left")
      } else {
        setFormNo(formNo + 1);
      }
    } else if (formNo === 3) {
      try {
        const res = await postRequest(process.env.REACT_APP_API_URL + '/api/profile/save', formData)
        if (res.statusText == "OK") {
          setFormNo(formNo + 1);
        }
      } catch (error) {
        console.log("ERROR", error)
      }
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = async () => {
    try {
      setIsLoading(true)
      await postRequest(process.env.REACT_APP_API_URL + '/api/profile/mark-as-complete');
      setIsLoading(false)
      dispatch( 
        setUser({
          ...user,
          profileCompleted: true,
        }) 
      )
      navigate('/dashboard')

    }catch(e) {
      notifyError(e?.data?.message || "Something went wrong");
      setIsLoading(false)
    
    }
  };

  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  const handleSignIn = () => {
    const form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    const params = {
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID || '194253275919-7q6a5vucqo9b84gau2ra04u51q87ndeg.apps.googleusercontent.com',
      redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI || 'http://localhost:3000/callback',
      response_type: 'token',
      scope: 'https://www.googleapis.com/auth/analytics.readonly',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    };

    // Add form parameters as hidden input values.
    for (const key in params) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', key);
      input.setAttribute('value', params[key]);
      form.appendChild(input);
    }

    // Add form to the page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  };

  useEffect(()=> loadProfileData, [])

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
                  onChange={handleForm}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="webUrl"
                  placeholder="Enter your website url"
                  id="webUrl"
                />
              </div>
              <div className="mt-4 flex justify-center items-center">
                <button
                  onClick={next}
                  className={`px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2] ${isLoading ? 'disabled' : ''
                    }`}
                  disabled={isLoading}
                >
                  {isLoading && (
                    <span style={{display: "inline-block"}} className="custom-loader" role="status" aria-hidden="true"></span>
                  )}
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
                  onChange={handleForm}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="businessTitle"
                  placeholder="Enter your business title"
                  id="businessTitle"
                />
              </div>
              <div className="flex flex-col mb-2">

                <h4>Business Description</h4>
                <input
                  value={businessDescription}
                  onChange={handleForm}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="businessDescription"
                  placeholder="Enter your business Description"
                  id="businessDescription"
                />
              </div>
              <div className="flex flex-col mb-2">
                <h4>Address</h4>
                <input
                  value={businessAddress}
                  onChange={handleForm}
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
                  onChange={handleForm}
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
                  onChange={handleForm}
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
                  onChange={handleForm}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="url"
                  name="socialLinks"
                  placeholder="Enter your socialLinks"
                  id="socialLinks"
                />
              </div>
              <div className="flex flex-col mb-2">
                <h4>Additional Information</h4>
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
                  onChange={inputHandle}
                  className="mt-1  "
                  type="file"
                  accept="image/png, image/jpeg"
                  name="path"
                  id="path"
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
              <div className="flex flex-col my-5">
                <label htmlFor="district">
                  Initgrate your current digital tools
                </label>
                {/* <button
                  onClick={handleSignIn}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-[#1C64F2]"
                >
                  Integrate
                </button> */}
                <div className="mt-2">
                  <button onClick={handleSignIn} class="shadow px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                      <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                      <span>Google Analytics</span>
                  </button>
                  </div>
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
                    Finish
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
