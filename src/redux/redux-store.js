import {combineReducers, createStore} from "redux";
import formReducer from "./form-reducer";


const reducers = combineReducers({
    formReducer:formReducer
})

const store = createStore(reducers)

// это можно в консоли вызывать store.getState()
window.store = store

export default store
