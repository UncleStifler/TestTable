import { usersReducer } from "./users-reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

let reducersSet = combineReducers({
	usersReducer: usersReducer,
});

export let store = createStore(reducersSet, applyMiddleware(thunk));
// window.store = store;
