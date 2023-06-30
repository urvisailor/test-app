import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from 'redux-thunk'
import reducer from "./reducer";

const rootReducer = combineReducers({
    user: reducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store