import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const Userhome = () => {
   
  return (
    <div>
      <Header></Header>
       <Outlet></Outlet>

    </div>
   
  )
}

export default Userhome