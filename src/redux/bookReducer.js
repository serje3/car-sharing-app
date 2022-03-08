import {CLOSE_ERROR_BOOK, CONFIRM_ENDED_BOOK, DELETE_BOOK, ERROR_BOOK, FETCH_BOOK, UPDATE_BOOK} from "./types";
import {OrderStatus} from "../components/sharing-ui/utils/orderStatus";

const initialState = {
    orderStatus: OrderStatus.ENDED_CONFIRMED,
    errorInvoked: false
}

export const bookReducer = (state = initialState, action)=>{
    switch (action.type){
        case FETCH_BOOK:
            return {...state,...action.payload, orderStatus: OrderStatus.ACTIVE}
        case UPDATE_BOOK:
            return {...state, ...action.payload, orderStatus: OrderStatus.ACTIVE}
        case DELETE_BOOK:
            return {...state,...action.payload, orderStatus: OrderStatus.ENDED, deletedAt: Date.now()}
        case CONFIRM_ENDED_BOOK:
            return {...state, orderStatus: OrderStatus.ENDED_CONFIRMED}
        case ERROR_BOOK:
            return {...state,...action.payload, errorInvoked: true}
        case CLOSE_ERROR_BOOK:
            return {...state, errorInvoked: false}
        default:
            return state
    }
}