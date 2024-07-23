import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productRedux/productSaga";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware()

const Store = configureStore({
  reducer:rootReducer,
  middleware:() => ([sagaMiddleware])
})

sagaMiddleware.run(productSaga)

export default Store