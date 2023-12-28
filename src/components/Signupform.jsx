import React, {useState} from "react";
import { Link } from "react-router-dom";
import { notifyError, notifySuccess } from "@/utils/functions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRequest } from "@/utils/api";
import { setUser } from "@/redux/authReducer/authSlice";

export default function Signupform() {

  const [newUser, setNewUser] = useState({
    name:'',
    email: '',
    password: '',
    confirmPassword: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  
 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
      try {

        if(!newUser.password) {
          return notifyError("All fields are required.")
        }

        if(newUser.password != newUser.confirmPassword) {
          return notifyError("Confirm Password does not match with the password")
        }

        const {data} = await postRequest(process.env.REACT_APP_API_URL +'/api/auth/register/user', newUser)
        const user = data.data.user
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(setUser(user));
        notifySuccess('Registration successfull.');
        navigate('/dashboard');
        return true; 
      } catch (error) {
        let message = error?.data?.message || 'Invalid credentials' 
        notifyError(message);
      }
     
  }

  return (
    <div className="h-screen">
      <div className=" bg-gray-100 flex h-full items-center py-16">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 ">
                  Sign up
                </h1>
                <p className="mt-2 text-sm text-gray-600 ">
                  Already have an account?
                  <Link to="/">
                    <span
                      className="text-blue-600 pl-2 decoration-2 hover:underline font-medium "
                      href="../examples/html/signin.html"
                    >
                      Sign in here
                    </span>
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 ">
                  Or
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-left mb-2 "
                      >
                        Name
                      </label>
                      <div className="relative">
                        <input
                          onChange={handleChange}
                          type="text"
                          id="name"
                          name="name"
                          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                          required
                          aria-describedby="name-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="name-error"
                      >
                        Please enter your name
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-left mb-2 "
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          onChange={handleChange}
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                          required
                          aria-describedby="email-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm text-left mb-2 "
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          onChange={handleChange}
                          type="password"
                          id="password"
                          name="password"
                          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                          required
                          aria-describedby="password-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        8+ characters required
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm mb-2 text-left "
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          onChange={handleChange}
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                          required
                          aria-describedby="confirmPassword-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="confirmPassword-error"
                      >
                        Confirm password does not match the password
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 "
                        />
                      </div>
                      <div className="ms-3">
                        <label htmlFor="remember-me" className="text-sm ">
                          I accept the{" "}
                          <a
                            className="text-blue-600 decoration-2 hover:underline font-medium "
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                      >
                        Sign up
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
