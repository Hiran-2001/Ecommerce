import * as type from "../Types"


const initialState = {
    data: [],
    message: "",
    error: false,
    loading: false
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case type.REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.REGISTER_SUCCESS:
            return {
                ...state,
                data: action.data,
                message: "Registration done successfully",
                loading: false,
                error: false
            }
        case type.REGISTER_FAILED:
            return {
                ...state,
                data: {},
                loading: false,
                error: action.error
            }

        default:
            return {
                state
            }
    }
}