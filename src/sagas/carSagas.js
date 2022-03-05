import { call, put } from "redux-saga/effects";
import { FETCH_CAR } from "../redux/types";
import { fetchJSON } from "../utils/fetch";

const CAR_INFO_FETCH_URL = process.env.REACT_APP_CAR_URL

export function* carWorker() {
    try{
        const payload = yield call(fetchJSON.bind(this, CAR_INFO_FETCH_URL))
        yield put({ type: FETCH_CAR, payload: payload })
    } catch (e) {
        console.error(e)
    }
}