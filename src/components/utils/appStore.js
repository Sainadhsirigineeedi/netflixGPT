import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice'
import movieReducer from '../utils/moviesSlice'
import gptReducer from   '../utils/gptSlice'


const appstore=configureStore({
     reducer:{
      userSlice:userReducer,
      moviesSlice:movieReducer,
      gptSlice:gptReducer
     }
})

export default appstore