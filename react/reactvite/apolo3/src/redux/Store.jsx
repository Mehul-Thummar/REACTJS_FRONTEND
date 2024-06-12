import CakeReducer from "./cake/CakeReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";


const Store = createStore(CakeReducer , composeWithDevTools(applyMiddleware(logger)))



export default Store

