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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashborad" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/digital-ads" element={<Digitalads />} />
          <Route path="/imageandvideo" element={<Imageandvideo />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/history-result" element={<HistoryandResult />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
