import { put, call } from 'redux-saga/effects'
import { FETCH_MARKERS } from "../redux/types";
import { fetchJSON } from "../utils/fetch";


const MARKERS_FETCH_URL = process.env.REACT_APP_MARKERS_URL

export function* mapWorker() {
    try {
        const payload = yield call(fetchJSON.bind(this, MARKERS_FETCH_URL))
        yield put({ type: FETCH_MARKERS, payload: payload })
    } catch (e) {
        console.error(e)
    }
}

