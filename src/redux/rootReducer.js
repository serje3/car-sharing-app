import { combineReducers } from "redux";
import { mapReducer } from "./mapReducer";
import { carReducer } from "./carReducer";


export const rootReducer = combineReducers({
    map: mapReducer,
    car: carReducer
})