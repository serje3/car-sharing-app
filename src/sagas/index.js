import {takeEvery} from "redux-saga/effects";
import {
    REQUEST_BOOK,
    REQUEST_CAR,
    REQUEST_DELETE_BOOK,
    REQUEST_MARKERS,
    REQUEST_UPDATE_BOOK,
} from "../redux/types";
import {mapWorker} from "./mapSagas";
import {carWorker} from "./carSagas";
import {bookCarWorker, updateBookWorker, endBookWorker} from "./bookSagas";


export function* sagaWatcher() {
    yield takeEvery(REQUEST_MARKERS, mapWorker)
    yield takeEvery(REQUEST_CAR, carWorker)
    yield takeEvery(REQUEST_BOOK, bookCarWorker)
    yield takeEvery(REQUEST_UPDATE_BOOK, updateBookWorker)
    yield takeEvery(REQUEST_DELETE_BOOK, endBookWorker)
}
