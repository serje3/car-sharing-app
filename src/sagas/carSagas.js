import { call, put } from "redux-saga/effects";
import { FETCH_CAR } from "../redux/types";
import { fetchJSON } from "../utils/fetch";
import {hideLoader, showLoader} from "../redux/actions";

const CAR_INFO_FETCH_URL = process.env.REACT_APP_API_URL

export function* carWorker({ payload: vehicleId }) {
    try{
        yield put(showLoader())
        const payload = yield call(fetchJSON.bind(this, CAR_INFO_FETCH_URL.concat("/".concat(vehicleId))))
        yield put({ type: FETCH_CAR, payload: payload })
    } catch (e) {
        console.error(e)
    } finally {
        yield put(hideLoader())
    }
}