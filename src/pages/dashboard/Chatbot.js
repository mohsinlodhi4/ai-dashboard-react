import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../../components/Dashboardcomponents/Header";
import Sidebar from "../../components/Dashboardcomponents/Sidebar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForumIcon from "@mui/icons-material/Forum";
import PeopleIcon from "@mui/icons-material/People";
import { ColorPicker } from "primereact/colorpicker";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import {getRequest } from 'E:\Mohsin\ai-dashboard-react-main\src\utils\api.js'
import { getRequest, postRequest } from '../../utils/api'
import Loader from "../../components/LoaderComponent/Loader";
import './Chatbot.css'
import { notifyError } from "../../utils/functions";
export default function Chatbot() {
  const [colorHEX, setColorHEX] = useState("6466f1");
  const [chatList, setChatList] = useState([]);
  const [chatListData, setChatListData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sessionId, setSessionId] = useState('')
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null)
  //Get list of sidebar 
  const getList = async () => {
    setLoading(true);
    const res = await getRequest(process.env.REACT_APP_API_URL +'/api/chat/list')
    setChatList(res?.data?.data?.messages)
    setLoading(false);
  }

  const formatMessageContent = useCallback((content)=> {
    if(!content) return <></>;

    return content.replaceAll("\t","   ").split("\n").map(con => <p>{con}</p>)
  } );

  //Retrieve detail data of list from sidebar
  const listdata = async (id) => {
    setLoading(true);

    const res = await getRequest(process.env.REACT_APP_API_URL +`/api/chat/${id}`)
    setChatListData(res?.data?.data?.message?.messages)
    setSessionId(id)
    setLoading(false);

  }

  const onListClick = (title) => {
    const { _id } = title
    listdata(_id)
  }

  //For new data send
  const onSend = async (value) => {
    if (value === '' || value.trim() == '') return
    setLoading(true);
    const data = {
      text: value,
      sessionId: sessionId
    }
    try {
      const res = await postRequest(process.env.REACT_APP_API_URL +'/api/chat/send-message', data)
      //Continue for handle newdata
      const question = {
        content: value,
        title: value
      }
      const answer = {
        content: res?.data?.data?.message?.content,
        createdAt: res?.data?.data?.message?.createdAt
      }
      setChatListData(prev => [...prev, question, answer])

      let newSessionId = res?.data?.data?.sessionId
      if(!sessionId || sessionId.toString() != newSessionId) {
        setSessionId(newSessionId)
        setChatList(prev => [{
          _id: newSessionId, 
          title: value.length ==20 ? value+ '...': value ,
          createdAt: res?.data?.data?.message?.createdAt
        }, ...prev])
      }
    } catch(e) {
      let message = e.message || e?.data?.message || e?.data?.data?.message || "Something went wrong";
      notifyError(message)
    }
    
    setLoading(false);

  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleButtonClick = () => {
    onSend(inputValue);
    setInputValue('');
  };
  useEffect(() => {
    getList();
  }, [])
  
  useEffect(()=>{
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [sessionId])
  
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:w-4/5 m-auto mr-0">
        <div className=" pb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-4xl">Chatbot</h1>
          </div>
          <div className="flex flex-1 flex-row gap-2 items-center justify-end">
            <div className="bg-blue-800 px-5 py-2 rounded-md">
              <h4 className="text-white font-bold">AIR used: 139</h4>
            </div>
            <HelpOutlineIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="flex flex-row items-center gap-8 border-b border-gray-400 py-8">
          {/* <a href="#">
            <h3 className="text-xl font-bold">Settings</h3>
          </a> */}
          {/* <a href="#"> */}
          <h3 className="text-xl font-bold">Chat History</h3>
          {/* </a> */}
          <span onClick={()=>{ setSessionId(null); setChatListData([])} } className="cursor-pointer text-white bg-[#1E429F] px-5 py-2 rounded" >
          <h3 className="text-xl font-bold">New Chat</h3>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div style={{ maxHeight: "500px", overflow: "scroll", overflowX: "hidden" }} className="py-6 px-5 border-r border-gray-500 lg:w-[20%] flex flex-col gap-6">
            {chatList?.map((item, index) => {
              const { title } = item
              const isActive = sessionId?.toString() === item?._id?.toString();
              return (
                <div key={index} 
                className={`chat-list flex flex-row items-center gap-3 ${isActive ? 'active-tab' : ''}`} onClick={() => { onListClick(item) }} >
                  <div className="">
                    <h3 className="text-sm font-bold">{title}</h3>
                    {/* <p className="text-sm">Ul and UX of chatbot</p> */}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="lg:w-[80%] p-5">

            <div style={{
              position: "relative",
              minHeight: "480px",
              maxHeight: "480px",
              border: "1px solid grey",
              borderRadius: "5px",
              padding: "10px",
              marginBottom: "15px",
              overflow: "scroll"
            }}>
              
              
              {loading ? <Loader /> : chatListData?.map((item, index) => {
                const { content, createdAt } = item
                const messageDate = new Date(createdAt);
                const formattedTime = messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const formattedDate = messageDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });
                return (
                  <>
                    <div style={{fontWeight: index % 2 === 0 ? "bold" : "normal"}} key={index}>{formatMessageContent(content)}</div>

                      {index % 2 !== 0 &&
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                          <div style={{fontWeight: "500"}}>{formattedTime}</div>
                          <div style={{marginBottom: "10px",fontWeight: "500"}}>{formattedDate}</div>
                        </div>
                      }
                  </>
                )
              })}
              <div ref={messagesEndRef} />
              {/* <img
                className="h-52 object-cover w-full rounded-md"
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              /> */}
            </div>
            {/* <div className="flex flex-row items-center gap-2 py-5">
              <p className="font-bold text-base">Chatbot Color</p>
              <HelpOutlineIcon style={{ fontSize: 18 }} />
            </div> */}
            <div style={{padding: "1px"}}>
              <div className="relative">
                <textarea
                  id="hs-textarea-ex-1"
                  className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      onSend(inputValue);
                      setInputValue('');
                    }
                  }}
                ></textarea>

                <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white ">
                  <div className="flex justify-end items-center">
                    <div className="flex items-center gap-x-1">
                      <button
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        onClick={handleButtonClick}
                      >
                        <svg
                          className="flex-shrink-0 h-3.5 w-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
