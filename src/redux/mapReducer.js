import { REQUEST_MARKERS } from "./types";


const initialState = {

}

export const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case REQUEST_MARKERS:
            return
        default:
            return state
    }
}