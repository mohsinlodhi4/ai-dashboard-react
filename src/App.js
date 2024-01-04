import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Setting from "./pages/dashboard/Setting";
import Help from "./pages/dashboard/Help";
import Profile from "./pages/dashboard/Profile";
import Analytics from "./pages/dashboard/Analytics";
import Digitalads from "./pages/dashboard/Digitalads";
import Imageandvideo from "./pages/dashboard/Imageandvideo";
import ContentWriting from "./pages/dashboard/ContentWriting";
import HistoryandResult from "./pages/dashboard/HistoryandResult";
import Chatbot from "./pages/dashboard/Chatbot";
import {NotFound} from './pages/404/NotFound';
import LandingPage from "./pages/LandingPage";
import MultiStep from "./pages/MultiStep";
import CreateChatBot from "./pages/CreateChatBot";
import DesignYourChatbot from "./pages/DesignYourChatbot";
import ChatBotList from "./pages/ChatbotList";
import GuestMiddleware from "./middleware/GuestMiddleware";
import AuthMiddleware from "./middleware/AuthMiddleware";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const checkProfileCompleted = (user)=> {
    return user && user.profileCompleted
  }
  const fallbackProfileURL = '/multistep';

  return (
    <div className="App">

      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            // newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage />} />
          <Route path="/login" element={ <GuestMiddleware> <Login /> </GuestMiddleware>} />
          <Route path="/signup" element={ <GuestMiddleware> <Signup /> </GuestMiddleware>} />

          <Route path="/dashboard" element={<AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <Dashboard /> </AuthMiddleware>} />
          <Route path="/setting" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <Setting /> </AuthMiddleware>} />
          <Route path="/help" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <Help /> </AuthMiddleware>} />
          <Route path="/multistep" element={ <AuthMiddleware > <MultiStep /> </AuthMiddleware>} />
          <Route path="/analytics" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <Analytics /> </AuthMiddleware>} />
          <Route path="/digital-ads" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <Digitalads /> </AuthMiddleware>} />
          <Route path="/imageandvideo" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <Imageandvideo /> </AuthMiddleware>} />
          <Route path="/content-writing" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <ContentWriting /> </AuthMiddleware>} />
          <Route path="/history-result" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <HistoryandResult /> </AuthMiddleware>} />
          {/* <Route path="/chatbot" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <Chatbot /> </AuthMiddleware>} /> */}
          <Route path="/chatbot" element={ <AuthMiddleware fallbackUrl={fallbackProfileURL} checkIfCanProceed={checkProfileCompleted} > <ChatBotList /> </AuthMiddleware>} />
          <Route path="/designchatbot" element={<DesignYourChatbot />} />
          <Route path="/createchatbot" element={<CreateChatBot />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
