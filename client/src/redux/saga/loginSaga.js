import { post } from "../apiCalls";
import { call, put, takeEvery } from "redux-saga/effects";
import * as action from "../Types";

function* login({ type, payload, navigate }) {
  console.log(payload);
  try {
    const res = yield call(post, "user/login", payload);
    console.log(res);
    yield put({ type: action.LOGIN_SUCCESS ,"data" : res ,message:"Login successfully", error:false});
    navigate("/")
  } catch (error) {
    yield put({ type: action.LOGIN_FAILED });
  }
}

function* authSaga(){
    yield takeEvery(action.LOGIN_REQUEST , login)
}
export default authSaga