import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
          navigate('/')   
        },1000)
    },[])
  return (
    <div>please login...</div>
  )
}

export default Error