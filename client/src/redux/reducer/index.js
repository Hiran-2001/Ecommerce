import { combineReducers  } from "redux";
import productReducer from "./productReducer";
import authReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
    product : productReducer,
    auth : authReducer,
    registration:registerReducer
})
export default rootReducer 