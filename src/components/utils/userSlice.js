import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userdata: null
    },
    reducers: {
        addUser: (state, action) => {
           
            state.userdata = action.payload
        }, removeUser: (state, action) => {
            state.userdata = null
        }
    }
})
export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer