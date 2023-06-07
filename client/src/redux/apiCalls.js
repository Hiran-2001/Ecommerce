// import usePost from "../Hooks/usePost";
// import { loginFailed, loginStart, loginSuccess } from "./userSlice";

// export const login = async (dispatch, user,url) => {
//   dispatch(loginStart());

//   try {
//     const res = await usePost(url, user);
//     dispatch(loginSuccess(res.data));
//   } catch (error) {
//     dispatch(loginFailed());
//   }
// };

import axios from "axios"

const baseURL = "http://localhost:5000/api"

axios.defaults.baseURL = baseURL;

export const get = async (url)=>{
    // console.log(url);
    try {
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        return {
            error : true,
            message : error
        }
    }
}

export const post = async(url,payload)=>{
    try {
        const res = await axios.post(url , payload)
        return res.data
    } catch (error) {
        return {
            error : true,
            message : error
        }
    }
}