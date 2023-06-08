import * as type from "../Types"
const initialState = {
    data: [],
    message:"",
    error: false,
    loading: false
}

export default function authReducer(state=initialState,action){
    switch(action.type){
        case type.LOGIN_REQUEST:
            return {
                ...state,
                loading:true
            }
            case type.LOGIN_SUCCESS: 
            localStorage.setItem("usertoken", action.data.token)
            console.log(action.data.token);
            return {
                ...state,
                data:action.data,
                loading:false,
                error:false,
                message:action.message
            }
            case type.LOGIN_FAILED:
                return{
                    ...state,
                    data:{},
                    loading:false,
                    error:action.error
                }
                default :return state
    }
}