import React, { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, dashboardUrl }) => {
  const [time, setTime] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; 
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    };

    updateClock(); 
    const interval = setInterval(updateClock, 1000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 shadow-lg p-2 flex justify-between items-center relative z-50 mb-4 rounded-xl border-b border-gray-700">
      {/* Hamburger Menu */}
      <button onClick={toggleSidebar} className="text-2xl text-white hover:scale-110 transition">
        <FiMenu />
      </button>

      {/* Logo */}
      <h1
        className="text-2xl font-bold text-white cursor-pointer hidden md:block"
        onClick={() => navigate(dashboardUrl)}
      >
        Smart Attendance
      </h1>

      {/* Live Clock */}
      <div className="text-lg font-semibold text-gray-200 animate-fadeIn">
        {time}
      </div>

      {/* Profile */}
      <div className="relative" ref={dropdownRef}>
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
          <img
            src="/default-avatar.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-white/20 hover:scale-110 transition"
          />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 shadow-lg rounded-md py-2 z-50">
            <Link to="/profile" className="block px-4 py-2 text-gray-200 hover:bg-gray-700">
              View Profile
            </Link>
            <Link to="/logout" className="block px-4 py-2 text-gray-200 hover:bg-gray-700">
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;