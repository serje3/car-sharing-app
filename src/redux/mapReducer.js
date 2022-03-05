import { FETCH_MARKERS } from "./types";


const initialState = {
    markers: []
}

export const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_MARKERS:
            return {...state, markers: action.payload}
        default:
            return state
    }
}