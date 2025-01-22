import React, { useRef, useState } from "react";
import { formFiledValidation } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import Header from "../Header.jsx"
import 'animate.css'; 



const Login = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState();

  const validation = () => {
    const message = formFiledValidation(
      email.current.value,
      password.current.value
    );
    if (message) {
      setError(message);
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
          if (user) {
            setError("");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_medium.jpg')",
      }}
    >
      <div className="flex justify-center items-center h-full">
      
        <div className="card bg-black bg-opacity-70 text-white w-96 shadow-xl rounded-lg">
          <div className="card-body p-6">
            <h1 className="text-3xl font-bold text-center text-red-600 mb-6 animate__animated animate__fadeIn">
              Sign In
            </h1>
           
            <input
              ref={email}
              value="sainadh@gmail.com"
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-4 p-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 bg-opacity-70"
            />
            {/* Password Input */}
            <input
              ref={password}
              value="Sainadh@123"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs mb-4 p-3 rounded-lg border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 bg-opacity-70"
            />
            {/* Error Message */}
            <p className="text-red-600 text-center mb-4">{error}</p>
            {/* Note Message */}
            <p className="text-red-600 text-center mb-4 animate__animated animate__fadeIn">
              Note: To preview the application, click on the Sign In button.
            </p>
            {/* Sign In Button */}
            <button
              className="btn btn-outline btn-success w-full mt-4 p-3 text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:bg-green-600 hover:text-white"
              onClick={validation}
            >
             SIGN IN
            </button>
            {/* Sign Up Link */}
            <p
              className="text-white text-center mt-4 cursor-pointer hover:text-red-500 transition-colors duration-300"
              onClick={() => navigate('/signup')}
            >
              New to Netflix? Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




