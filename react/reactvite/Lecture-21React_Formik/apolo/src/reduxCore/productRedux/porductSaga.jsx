import { takeEvery, put } from "redux-saga/effects";

import { PRODUCT_GET, PRODUCT_SET } from "../Constant";

function* getproduct() {
  let data = yield fetch('http://localhost:3000/productdata')
  data = yield data.json()
  console.log('productSaga Called', data);
  yield put({ type: PRODUCT_SET, data });

}

function* productSaga() {
  yield takeEvery(PRODUCT_GET, getproduct())
}

export default productSaga