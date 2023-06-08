import { post } from "../apiCalls";
import { call, put, takeEvery } from "redux-saga/effects";
import * as action from "../Types";

function* login({ type, payload, navigate }) {
  try {
    const res = yield call(post, "/login", payload);
    yield put({ type: action.LOGIN_SUCCESS });
  } catch (error) {
    yield put({ type: action.LOGIN_FAILED });
  }
}

export function* authSaga(){
    yield takeEvery(action.LOGIN_REQUEST , login)
}