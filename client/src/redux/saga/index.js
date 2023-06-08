import {all} from "redux-saga/effects"
import productSaga from "./productSaga"
import { authSaga } from "./loginSaga"

export default function* rootSaga(){
    yield all([
        productSaga(),
        authSaga()
    ])
}