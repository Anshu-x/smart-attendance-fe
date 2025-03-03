import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialLoginState = queryParams.get('login') !== 'false';
  const [login, setLogin] = useState(initialLoginState);
  const elRef = useRef(null);

  useEffect(() => {
    if (login) {
      elRef.current.style.transform = "translateX(100%)";
      elRef.current.style.width = "50%";
    } else {
      elRef.current.style.transform = "translateX(0%)";
      elRef.current.style.width = "50%";
    }
  }, [login]);

  function handleShift() {
    setLogin(prev => {
      const newLoginState = !prev;
      navigate(`?login=${newLoginState}`);
      if (newLoginState) {
        elRef.current.style.transform = "translateX(100%)";
        elRef.current.style.width = "50%";
      } else {
        elRef.current.style.transform = "translateX(0%)";
        elRef.current.style.width = "50%";
      }
      return newLoginState;
    });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-900"
      style={{
        backgroundImage: "url('bg-pattern.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl w-full max-w-4xl h-auto overflow-hidden relative">
        <div className='flex flex-row h-auto'>
          <Login className={`flex-1 duration-700 ${login ? "block" : "hidden md:block md:opacity-0"}`} handleClick={handleShift} />
          <Signup className={`flex-1 duration-700 ${login ? "hidden md:block md:opacity-0" : "block"}`} handleClick={handleShift} />
        </div>

        <div ref={elRef} className={`hidden md:block absolute h-full top-0 overflow-hidden ${login ? "rounded-l-[125px]" : "rounded-r-[125px]"} duration-500`} style={{ width: "50%", transform: "translateX(100%)" }}>
          <div className={`flex bg-gradient-to-r from-indigo-600 to-purple-400 flex-col justify-center items-center text-white p-6 h-full w-full absolute`}>
            <h1 className="text-3xl font-bold">{login ? "Welcome Back!" : "Hello, Friend!"}</h1>
            <p className="text-center text-md mt-2 w-70">{login ? "Enter your personal details to use all of site features." : "Register with your personal details to use all site features."}</p>
            <button
              className="mt-5 border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-indigo-500 cursor-pointer transition"
              onClick={handleShift}
            >
              {login ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;