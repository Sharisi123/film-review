import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMidleWare from "redux-thunk"
import pageReducer from "./pageReducer"

let redusersContainer = combineReducers({
	page: pageReducer,
})
let store = createStore(redusersContainer, applyMiddleware(thunkMidleWare))

window.store = store
export default store
