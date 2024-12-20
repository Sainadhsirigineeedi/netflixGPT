import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { data, Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";

const Header = () => {
  const userdata = useSelector((store) => store.userSlice.userdata);

  
  const navigate = useNavigate();

  return (
    <div className="navbar bg-gradient-to-b from-black">
      <div className="flex-1">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="h-10 ml-2"
        />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end mr-3">
          
        {
        !userdata?(
          <h1 className="text-red-700">welcome:</h1>
        ):(
          <h1 className="text-red-700">welcome{userdata.dispalyname}</h1>
        )
      }
       
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://images.ctfassets.net/4cd45et68cgf/1pFUjCo5EKjZp9SMoSIsmq/f66c53a4473233fa73f5820bc8a04d8a/NFLX_Profile_10Yrs.jpg?w=2000"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button
                onClick={() => {
                  signOut(auth)
                    .then(() => {})
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
  
  );
};

export default Header;

{
  /* <div>
     <div className="flex justify-between items-center bg-gradient-to-b from-black">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="h-10 ml-2"
      />
      {
        !userdata?(
          <h1 className="text-white">welcome:</h1>
        ):(
          <h1 className="text-yellow">welcome{userdata.email}</h1>
        )
      }
      <div>
        <button className="btn mr-4"
        onClick={()=>{
    signOut(auth).then(() => {
      
}).catch((error) => {
    console.log(error)
});
        }}
         >logout</button>
      </div>
    </div>
   </div> */
}
