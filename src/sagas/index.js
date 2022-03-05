import { takeEvery } from "redux-saga/effects";
import { REQUEST_CAR, REQUEST_MARKERS } from "../redux/types";
import { mapWorker } from "./mapSagas";
import { carWorker } from "./carSagas";


export function* sagaWatcher(){
    yield takeEvery(REQUEST_MARKERS, mapWorker)
    yield takeEvery(REQUEST_CAR, carWorker)
}
