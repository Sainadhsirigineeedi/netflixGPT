import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowplayingdata: [],
        populardata: [],
        toprateddata: [],
        upcomingdata: [],
        trailerData: null,
        gpttrailerData: null
    },
    reducers: {
        addNowplaying: (state, action) => {

            state.nowplayingdata = action.payload
        },
        addTrailerdata: (state, action) => {

            state.trailerData = action.payload

        },
        addPopulardata: (state, action) => {
            state.populardata = action.payload
        },
        addToprateddata: (state, action) => {
            state.toprateddata = action.payload
        },
        addUpcomingdata: (state, action) => {
            state.upcomingdata = action.payload
        },
        addgptTailerdata:(state,action)=>{
              state.gpttrailerData=action.payload  
        }
    }
});
export const { addNowplaying, addTrailerdata, addPopulardata, addToprateddata,addUpcomingdata,addgptTailerdata } = moviesSlice.actions
export default moviesSlice.reducer