import { applyMiddleware, legacy_createStore } from "redux";

import reducers from "../Reducers/CombinerReducers";
import { thunk } from "redux-thunk";

const store1 =  legacy_createStore(reducers, {}, applyMiddleware(thunk));

console.log("state is " + store1.getState())
export default store1;