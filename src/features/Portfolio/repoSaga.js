import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "../getRepos";
import {
  fetchRepos,
  fetchReposError,
  fetchReposSuccess,
} from "./repoSlice";

function* fetchReposHandler() {
  try {
    yield delay(2000);
    const repos = yield call(getRepos);
    yield put(fetchReposSuccess(repos));
  } catch (error) {
    yield put(fetchReposError());
  }
}

export function* repoSaga() {
  yield takeLatest(fetchRepos.type, fetchReposHandler);
}
