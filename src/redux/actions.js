import {
    CLOSE_ERROR_BOOK,
    CONFIRM_ENDED_BOOK,
    HIDE_CAR_INFO, HIDE_LOADER,
    REQUEST_BOOK,
    REQUEST_CAR,
    REQUEST_DELETE_BOOK,
    REQUEST_MARKERS,
    REQUEST_UPDATE_BOOK,
    SHOW_CAR_INFO, SHOW_LOADER
} from "./types";


export function fetchMarkers() {
    return {
        type: REQUEST_MARKERS
    }
}

export function fetchCar(vehicleId){
    return {
        type: REQUEST_CAR,
        payload: vehicleId
    }
}

export function bookCar(vehicleId){
    return {
        type: REQUEST_BOOK,
        payload: vehicleId
    }
}

export function updateBook(orderId) {
    return {
        type: REQUEST_UPDATE_BOOK,
        payload: orderId
    }
}

export function deleteBook(orderId) {
    return {
        type: REQUEST_DELETE_BOOK,
        payload: orderId
    }
}

export function confirmEndedBook(){
    return {
        type: CONFIRM_ENDED_BOOK
    }
}

export function closeErrorBook(){
    return {
        type: CLOSE_ERROR_BOOK
    }
}

export function showCarInfo(){
    return {
        type: SHOW_CAR_INFO
    }
}

export function hideCarInfo(){
    return {
        type: HIDE_CAR_INFO
    }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}