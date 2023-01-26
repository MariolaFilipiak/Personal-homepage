import {all} from "redux-saga/effects";
import { personalHomePageSaga } from "./Portfolio/Repositories/personalHomePageSaga";

export default function* saga() {
    yield all([
        personalHomePageSaga(),
    ]);
}