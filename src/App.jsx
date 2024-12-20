import React, { useEffect } from 'react'

import Login from './/components/formcomponets/Login'
import Header from './components/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from './components/utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './components/utils/userSlice';


const App = () => {
   const dispath=useDispatch();
   const navigate=useNavigate()
   useEffect(()=>{
   onAuthStateChanged(auth, (user) => {
      if (user) {
       
        dispath(addUser({uid:user.uid,email:user.email,dispalyname:user.displayName}))
        
         
      } else {
          dispath(removeUser())
          navigate('/')
      }
    });
   },[])
  return (
    <div>
     
      <Outlet></Outlet>
    </div>
  )
}

export default App