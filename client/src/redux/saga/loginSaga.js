import { post } from "../apiCalls";
import { call } from 'redux-saga/effects';

function* login({type,payload,navigate}){
    try {
        const res = yield call(post , )
    } catch (error) {
        
    }
}