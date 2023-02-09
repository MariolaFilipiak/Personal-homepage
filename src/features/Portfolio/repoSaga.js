import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "../getRepos";
import {
  fetchRepos,
  fetchReposError,
  fetchReposSuccess,
} from "./repoSlice";
const LoadingDelay = 2_000;
function* fetchReposHandler() {
  try {
    yield delay(LoadingDelay);
    const repos = yield call(getRepos);
    yield put(fetchReposSuccess(repos));
  } catch (error) {
    yield put(fetchReposError());
  }
}

export function* repoSaga() {
  yield takeLatest(fetchRepos.type, fetchReposHandler);
}
