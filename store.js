import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import math from "./src/reducers/mathReducer.js";
import user from "./src/reducers/userReducer.js";

export default createStore(
    combineReducers({ math, user }), {},
    applyMiddleware(createLogger())
);