import * as type from "../Types"

const initialState = {
    data : [],
    loading: false,
   message : "",
   success : false
}

export default function productReducer(state = initialState,action){

    switch(action.type){
        case  type.GET_PRODUCT_REQUEST || type.POST_PRODUCT_REQUEST || type.DELETE_PRODUCT_REQUEST || type.PUT_PRODUCT_REQUEST :
            return {
                ...state,
                loading :true
            }
            case type.PRODUCT_SUCCESS :
                console.log(action.data);
                return {
                    ...state,
                    data : action.data,
                    loading : false,
                    success : true
                }

                case type.PRODUCT_FAILED : 
                return {
                    ...state,
                    loading: false,
                    message : "Failed to process",
                    success : false
                }

                default :
                 return state;
    }
}