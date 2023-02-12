import { all } from "redux-saga/effects";
import { repoSaga } from "../features/Portfolio/repoSaga";

export default function* rootSaga() {
  yield all([repoSaga()]);
}
