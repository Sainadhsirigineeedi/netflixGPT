import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        isGpt:false,
        gptMovies:null
    },
    reducers:{
          addGptbutton:(state,action)=>{
               state.isGpt = !state.isGpt
          },
          addGptMoviedata:(state,action)=>{
            state.gptMovies=action.payload
          }

    }
})
export const {addGptbutton,addGptMoviedata}=gptSlice.actions
export default gptSlice.reducer