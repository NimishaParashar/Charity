import { createStore, combineReducers, applyMiddleware } from 'redux'
import charityReducer from '../reducers/charityReducer'
import thunk from "redux-thunk";
const configureStore = () => {
    const store = createStore(
        combineReducers({
            charity: charityReducer
        }),
        applyMiddleware(thunk)
    )
    return store;
}

export default configureStore;