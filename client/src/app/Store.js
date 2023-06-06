import {createStore,compose,applyMiddleware} from 'redux'
import createSagaMiddlware from "redux-saga"
import rootReducer from '../redux/reducer/index'
import rootSaga from '../redux/saga/index'
const sagaMiddleware = createSagaMiddlware()
const store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(rootReducer);
sagaMiddleware.run(rootSaga)

export default store