import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice'


const appstore=configureStore({
     reducer:{
      userSlice:userReducer
     }
})

export default appstore