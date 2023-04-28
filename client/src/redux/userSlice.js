import { createSlice } from "@reduxjs/toolkit";
import usePost from "../Hooks/usePost";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFetching:false,
        error:false
    },

    reducers:{
        loginStart:(state,action)=>{
           state.isFetching = true

        
        },
        loginSuccess:(state,action)=>{
           state.isFetching= false
           state.currentUser=action.payload
        },
        loginFailed:(state,action)=>{
           state.isFetching=false
           state.error=true
        },
    }
})

export const {loginStart,loginSuccess,loginFailed} = userSlice.actions;

export default userSlice.reducer