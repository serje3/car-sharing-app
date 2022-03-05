import { HIDE_CAR_INFO, REQUEST_CAR, REQUEST_MARKERS, SHOW_CAR_INFO } from "./types";


export function fetchMarkers() {
    return {
        type: REQUEST_MARKERS
    }
}

export function fetchCar(){
    return {
        type: REQUEST_CAR
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