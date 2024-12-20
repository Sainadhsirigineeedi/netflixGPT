import React, { useRef, useState } from "react";
import { formFiledValidation } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import Header from "../Header.jsx"


const Login = () => {
  const navigate=useNavigate()
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
          // Signed in
          const user = userCredential.user;
          navigate('/userhome')
          
          if (user) {
           
            setError("");
          }

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + error.message);
        });
    }
  };
  return (
    <div>
      
      <div
        className="flex justify-center items-center  bg-gray-900
      bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_medium.jpg')] min-h-screen bg-cover bg-center"
      >
        <div className="card bg-gray-900 w-96 shadow-xl">
          <div className="card-body">
            <h1 className="text-white ml-2 font-bold">SignIN..</h1>
            <input
              ref={email}
              value="sainadh@gmail.com"
              type="text"
              placeholder="email"
              className="input input-bordered w-full max-w-xs mt-4"
            />
            <br />
            <input
              ref={password}
              value="Sainadh@123"
              type="text"
              placeholder="password"
              className="input input-bordered w-full max-w-xs mt-4"
            />
            <br />
            <p className="text-red-600">{error}</p>
            <button
              className="btn btn-outline btn-success mt-4"
              onClick={validation}
            >
              sign in
            </button>
            <p
              className="text-white py-3 cursor-pointer "
              onClick={() => navigate("/signup")}
            >
              New to netFlix?SIGN up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
