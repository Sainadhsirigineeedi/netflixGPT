import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/formcomponets/Login'


function App() {
  
  const appRoutes=createBrowserRouter([
     {
       path:'/',
       element:<Home></Home>,
       children:[
        {
          path:'/',
          element:<Login></Login>
        }
       ]
       
     }
  ])

  return (
    <RouterProvider router={appRoutes}>

    </RouterProvider>
  )
}

export default App
