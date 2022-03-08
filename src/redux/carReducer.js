import {FETCH_CAR, SHOW_CAR_INFO, HIDE_CAR_INFO} from "./types";


const initialState = {
    info: {},
    toggle: false
}

export const carReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_CAR:
            return {...state, info: action.payload}
        case SHOW_CAR_INFO:
            return {...state, toggle: true}
        case HIDE_CAR_INFO:
            return {...state, toggle: false}
        default:
            return state
    }
}