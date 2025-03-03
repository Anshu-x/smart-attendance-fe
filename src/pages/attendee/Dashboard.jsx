import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ProfileCard from "../../components/ProfileCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isNewUser = false; // Change this based on user status

  return (
    <div 
      className="min-h-screen bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg-pattern.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.9, 
      }}
    >
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className="relative z-10 p-6 md:p-10">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} dashboardUrl="/dashboard" />

        {/* Profile Section */}
        <ProfileCard name="Azrithyx" profilePic="/default-avatar.png" isNewUser={isNewUser} />

        {/* Greeting */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 text-center 
        text-white font-extrabold text-3xl md:text-4xl lg:text-5xl 
        animate-fadeIn drop-shadow-lg mt-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {isNewUser ? "Welcome to Your Dashboard!" : "Welcome Back, Azrithyx!"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg transition-transform hover:scale-105 hover:bg-blue-500 shadow-lg flex items-center justify-center gap-2"
            onClick={() => navigate("/scan-attendance")}
          >
            <i className="fas fa-qrcode"></i> Mark Attendance
          </button>
          <button
            className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg text-lg transition-transform hover:scale-105 hover:bg-gray-500 shadow-lg flex items-center justify-center gap-2"
            onClick={() => navigate("/history")}
          >
            <i className="fas fa-history"></i> View Attendance History
          </button>
        </div>

        {/* Recent Attended Events */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Recently Attended Events</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded-lg shadow-md transform transition hover:scale-105 hover:bg-white/20">
              <p className="text-lg">⚡ AI Tech Conference</p>
              <p className="text-sm text-gray-300">Feb 25, 2025</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg shadow-md transform transition hover:scale-105 hover:bg-white/20">
              <p className="text-lg">🚀 Cloud Security Summit</p>
              <p className="text-sm text-gray-300">Feb 20, 2025</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg shadow-md transform transition hover:scale-105 hover:bg-white/20">
              <p className="text-lg">📢 Open Source Meetup</p>
              <p className="text-sm text-gray-300">Feb 15, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;