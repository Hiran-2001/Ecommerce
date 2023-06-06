import {call,put,takeEvery} from "redux-saga/effects"
import {get} from "../apiCalls"
import * as action from "../Types"

function* getSaga({type,payload}){
    console.log(payload);
    // const url = 'api/products/all'
    const categoryUrl = `/api/products/all?category=${payload}`
    try {
        const data = yield call(get ,categoryUrl)
        // console.log(data.products);
        if(data){
            yield put({"type": action.PRODUCT_SUCCESS, "data":data.products })
        }else{
            yield put ({"type":action.PRODUCT_FAILED, "error" : true})
        }
    } catch (error) {
        yield put ({"type":action.PRODUCT_FAILED, "error" : true})

    }
}


function* productSaga(){
    yield takeEvery(action.GET_PRODUCT_REQUEST, getSaga)
}
export default productSaga