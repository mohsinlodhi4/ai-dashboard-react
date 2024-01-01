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

import GuestMiddleware from "./middleware/GuestMiddleware";
import AuthMiddleware from "./middleware/AuthMiddleware";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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

          <Route path="/dashboard" element={<AuthMiddleware> <Dashboard /> </AuthMiddleware>} />
          <Route path="/setting" element={ <AuthMiddleware> <Setting /> </AuthMiddleware>} />
          <Route path="/help" element={ <AuthMiddleware> <Help /> </AuthMiddleware>} />
          <Route path="/profile" element={ <AuthMiddleware> <Profile /> </AuthMiddleware>} />
          <Route path="/analytics" element={ <AuthMiddleware> <Analytics /> </AuthMiddleware>} />
          <Route path="/digital-ads" element={ <AuthMiddleware> <Digitalads /> </AuthMiddleware>} />
          <Route path="/imageandvideo" element={ <AuthMiddleware> <Imageandvideo /> </AuthMiddleware>} />
          <Route path="/content-writing" element={ <AuthMiddleware> <ContentWriting /> </AuthMiddleware>} />
          <Route path="/history-result" element={ <AuthMiddleware> <HistoryandResult /> </AuthMiddleware>} />
          <Route path="/chatbot" element={ <AuthMiddleware> <Chatbot /> </AuthMiddleware>} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
