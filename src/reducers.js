import { combineReducers } from "redux";
//import indexReducer from './container/reducers';


export default function createReducer(asyncReducers) {
    return combineReducers({
        ...asyncReducers,
    });
}