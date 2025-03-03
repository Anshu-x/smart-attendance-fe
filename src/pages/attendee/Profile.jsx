import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
      <div className="relative z-10 p-6 md:p-10">
        <Header toggleSidebar={toggleSidebar} />
        <div ref={sidebarRef}>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        <div className="flex flex-col justify-center items-center text-center w-full max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl font-bold mb-6 text-blue-500">Profile</h1>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full">
            <div className="flex justify-center mb-6">
              <img
                src="/default-avatar.png"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Basic Information</h2>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value="John Doe"
                    readOnly
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value="john.doe@example.com"
                    readOnly
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value="+1234567890"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Personal Information</h2>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm font-bold mb-2">Date of Birth</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value="01/01/1990"
                    readOnly
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm font-bold mb-2">Address</label>
                  <textarea
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value="123 Main St, City, Country"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Account Settings</h2>
                <button
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg transition-transform hover:scale-105 hover:bg-blue-500 shadow-lg mb-4"
                  onClick={() => navigate("/change-password")}
                >
                  Change Password
                </button>
                <button
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg transition-transform hover:scale-105 hover:bg-blue-500 shadow-lg"
                  onClick={() => navigate("/notification-preferences")}
                >
                  Notification Preferences
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Information</h2>
                <div className="flex flex-col items-center">
                  <a href="https://twitter.com" className="text-blue-400 hover:underline mb-2">Twitter</a>
                  <a href="https://linkedin.com" className="text-blue-400 hover:underline mb-2">LinkedIn</a>
                  <a href="https://facebook.com" className="text-blue-400 hover:underline">Facebook</a>
                </div>
              </div>
            </div>
            <button
              className="mt-8 w-full bg-red-600 text-white py-3 px-6 rounded-lg text-lg transition-transform hover:scale-105 hover:bg-red-500 shadow-lg"
              onClick={() => navigate("/logout")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;