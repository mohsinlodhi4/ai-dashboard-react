import React, {useState, useEffect, useRef} from "react";
import InfoIcon from "@mui/icons-material/Info";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRequest, postRequest } from "../utils/api";
import { notifyError, notifySuccess } from "../utils/functions";
import { useSelector } from "react-redux";
import { getChatbotIcon, getRandomChatbotIcon, getImageUrl } from "../utils/helper";
import Loader from "@/components/LoaderComponent/Loader";

export default function ChatbotPreview(){
    const [chatBot, setChatBot] = useState({})
    const [loading, setLoading] = useState(false) // loader will be implemented later
    const {id} = useParams();
    const navigate = useNavigate();
    const [chatListData, setChatListData] = useState([]);
    const messagesEndRef = useRef(null)
    const [sessionId, setSessionId] = useState('')
    const [inputValue, setInputValue] = useState('');

    // when received from database/api
    const setChatBotFormatted = (data)=>{
        if(data) {
        setChatBot({
            chatBotId: data._id, 
            ...data,
            ...data.template, 
        })
        }
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
  const formatMessageContent = (content)=> {
        if(!content) return <></>;

        return content.replaceAll("\t","   ").split("\n").map(con => <p>{con}</p>)
    }


    const sendMessage = ()=>{

    }

    useEffect(()=>{

        return ()=>{
          if(id){
            setLoading(true)
            getRequest(process.env.REACT_APP_API_URL + `/api/chatbot/${id}`)
              .then(( {data}) => {
                if(data && data.data) {
                  setChatListData([{content: data.data.template.introMessage }])
                  return setChatBotFormatted(data.data)
                }
                navigate('/chatbot')
              })
              .catch(err=>{ navigate('/chatbot') })
              .finally(()=> { setLoading(false) })
          }
        }
      }, [id]);
    
    return (
    <div className=" bg-gray-100 flex md:flex-row items-center justify-center flex-col">
        <div className="md:w-[50%] bg-[#F6F8FA] p-20 pb-0" >
        <div>
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-7 pb-10" >
          <div>
            <img
              // src="https://images.unsplash.com/photo-1704146087769-ba4d31543936?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={getImageUrl(chatBot)}
              className="w-40 h-40 rounded-full object-cover border-2 border-black"
            />
          </div>
          <div>
            <h3 className="text-black font-bold text-2xl">BY {chatBot.user?.name}</h3>
            <h2 className="text-black font-bold text-4xl">
              {chatBot.name}
            </h2>
            <h4 className="text-black text-3xl">
              {chatBot.description}
            </h4>
          </div>
        </div>
        {/* <div className="flex flex-row gap-3">
          <div className="md:w-[10%]">
            <img
              src={getImageUrl(chatBot)}
              className="w-14 h-14 object-cover"
            />
          </div>
          <div>
            <p className="bg-blue-200 p-5 rounded-lg">
              {
                chatBot.introMessage || 'No intro message..'
              }
            </p>
          </div>
        </div> */}
                  <div className="lg:w-[100%]"  style={{overflowY: 'scroll' }}>

                    <div style={{
                    position: "relative",
                    minHeight: "400px",
                    width: "100%",
                    // border: "1px solid grey",
                    borderRadius: "5px",
                    padding: "10px",
                    marginBottom: "15px",
                    // overflowY: "scroll"
                    }}>
                    
                    
                    {loading ? <Loader /> : chatListData?.map((item, index) => {
                        const { content, createdAt } = item
                        console.log("content", content)
                        const messageDate = new Date(createdAt);
                        const formattedTime = messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        const formattedDate = messageDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                        });
                        return (
                        <div className="flex items-center">
                            <div className="md:w-[10%]">
                                <img
                                src={getImageUrl(chatBot)}
                                className="w-14 h-14 object-cover"
                                />
                            </div>
                            <div className="bg-blue-200 p-5 rounded-lg" style={{fontWeight: index % 2 === 0 ? "bold" : "normal"}} key={index}>{formatMessageContent(content)}</div>

                            <div>
                                {index % 2 !== 0 &&
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <div style={{fontWeight: "500"}}>{formattedTime}</div>
                                    <div style={{marginBottom: "10px",fontWeight: "500"}}>{formattedDate}</div>
                                    </div>
                                }
                            </div>
                        </div>
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
                   
                    </div>
       
        <div className="flex flex-row items-center justify-between bg-white rounded-md p-3 my-16">
              <textarea
                id="chat"
                rows="1"
                className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={chatBot.placeholderText ||  "Your message..."}
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
              <button
                onClick={handleButtonClick}
                type="submit"
                className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5 rotate-90 rtl:-rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
                <span className="sr-only">Send message</span>
              </button>
        </div>
      </div>
    </div>
    )
}