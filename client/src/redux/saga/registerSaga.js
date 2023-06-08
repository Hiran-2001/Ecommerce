import { post } from "../apiCalls";
import { call, put, takeEvery } from "redux-saga/effects";
import * as action from "../Types";


function* register({ type, payload }) {
    console.log(payload);
    try {
        const res = yield call(post, "user/register", payload)
        console.log(res);
        yield put({ "type": action.REGISTER_SUCCESS, "data": res, error: false, loading: false })
    } catch (error) {
        yield put({ "type": action.REGISTER_FAILED, error: true, loading: false })

    }
}

function* registerSaga(){
  yield takeEvery(action.REGISTER_REQUEST,register)
}

export default registerSaga