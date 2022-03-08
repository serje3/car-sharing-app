import {call, put} from "redux-saga/effects";
import {fetchJSON} from "../utils/fetch";
import {DELETE_BOOK, ERROR_BOOK, FETCH_BOOK, UPDATE_BOOK} from "../redux/types";
import {deleteBook} from "../redux/actions";

const API_URL = process.env.REACT_APP_API_URL


function* bookCarWorker({ payload: vehicleId }){
    try{
        const payload = yield call(
            fetchJSON.bind(this, API_URL + "/" + vehicleId + "/booking", "POST")
        )
        yield put({ type: FETCH_BOOK, payload: payload })
    } catch (e) {
        console.error(e)
    }
}

function* updateBookWorker({ payload: orderId }){
    try{
        const payload = yield call(
            fetchJSON.bind(this, API_URL + "/" + orderId + "/booking", "PUT")
        )
        yield put({ type: UPDATE_BOOK, payload: payload })
    } catch (e) {
        yield put({type:ERROR_BOOK, payload:e})
        yield put(deleteBook(orderId))
        console.error(e)
    }
}

function* endBookWorker({ payload: orderId }){
    try{
        const payload = yield call(
            fetchJSON.bind(this, API_URL + "/" + orderId + "/booking", "DELETE",)
        )
        yield put({ type: DELETE_BOOK, payload: payload })
    } catch (e) {
        yield put({type:ERROR_BOOK, payload:e})
        console.error(e)
    }
}

export {
    bookCarWorker,
    updateBookWorker,
    endBookWorker
}