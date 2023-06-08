import {all} from "redux-saga/effects"
import productSaga from "./productSaga"
import  authSaga  from "./loginSaga"
import registerSaga from "./registerSaga"

export default function* rootSaga(){
    yield all([
        productSaga(),
        authSaga(),
        registerSaga() 
    ])
}