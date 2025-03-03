import { useState } from "react";
import { User, Mail, LockKeyhole, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Signup({ className, handleClick }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Valid, setValid] = useState(true);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { username, email, password });
  };

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
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
    <div className={`p-4 md:p-8 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto ${className}`}>
      <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-6 md:mb-10">Sign Up</h2>
      <form onSubmit={handleSignup} className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-4 md:p-10">
        <div className="mb-4">
          <div className="relative w-full">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border-md bg-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-300"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

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
            {!Valid && <p className="text-red-500 text-sm mt-1">Please enter a valid phone number.</p>}
          </div>
        </div>

        <div className="relative mb-4 inline-block text-left w-full">
          <select className="px-4 py-2 border-md bg-white/30 rounded-xl w-full focus:outline-none cursor-pointer text-white">
            <option className="bg-indigo-900">Select your role</option>
            <option className="bg-indigo-900">Admin</option>
            <option className="bg-indigo-900">Attendee</option>
          </select>
        </div>

        <div className="mb-4">
          <div className="relative w-full">
            <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
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

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold mb-4 py-2 rounded-lg text-lg hover:bg-indigo-500 transition duration-300 cursor-pointer"
        >
          Sign Up
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
          Sign Up with Google
        </button>
        <p className="text-center font-medium mt-2 md:hidden text-white">Already have an account? <a onClick={handleClick} className="text-indigo-500 font-semibold cursor-pointer hover:underline">Login</a></p>
      </form>
    </div>
  );
}
