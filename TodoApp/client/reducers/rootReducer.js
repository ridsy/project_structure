import {combineReducers } from "redux";

import todos from "./todoReducer";

var rootReducer = combineReducers({
    todos
})

export default rootReducer;