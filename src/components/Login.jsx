import { useState, useRef } from "react";
import { Mail, Phone, LockKeyhole } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Login({ className, handleClick }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const formRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleChange = (value) => {
    setPhoneNumber(value);
    setIsValid(validatePhoneNumber(value));
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Google User:", result.user);
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  return (
    <div className={`p-8 w-full max-w-sm md:max-w-md lg:max-w-lg ${className}`}>
      <h2 className="text-4xl font-bold text-center text-white mb-10">Login</h2>
      <form 
        ref={formRef} 
        onSubmit={handleLogin} 
        className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 md:p-10"
      >
        <div className="mb-4">
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 border-md bg-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-300"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full">
            <div className="relative w-full">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="tel"
                className="w-full pl-10 pr-4 py-2 border-md bg-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-300"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => handleChange(e.target.value)}
                required
              />
            </div>
            {!isValid && <p className="text-red-500 text-sm mt-1">Please enter a valid phone number.</p>}
          </div>
        </div>

        <div className="mb-3">
          <div className="relative w-full">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2 border-md bg-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-300"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <button type="button" className="text-indigo-500 font-normal hover:underline text-md cursor-pointer">
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold mb-4 py-2 rounded-lg text-lg hover:bg-indigo-500 transition duration-300 cursor-pointer"
        >
          Login
        </button>

        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border-md py-2 rounded-lg bg-white/30 transition duration-300 cursor-pointer hover:bg-white/50 text-white"
        >
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=FFFFFF"
            alt="Google Logo"
          />
          Login with Google
        </button>
        <p className="text-center font-medium mt-2 md:hidden text-white">Don't have an account? <a onClick={handleClick} className="text-indigo-500 font-semibold cursor-pointer hover:underline">Sign Up</a></p>
      </form>
    </div>
  );
}