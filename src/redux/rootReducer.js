import { combineReducers } from "redux";
import { mapReducer } from "./mapReducer";
import { carReducer } from "./carReducer";
import { bookReducer } from "./bookReducer";
import {appReducer} from "./appReducer";


export const rootReducer = combineReducers({
    map: mapReducer,
    car: carReducer,
    booking: bookReducer,
    app: appReducer
})