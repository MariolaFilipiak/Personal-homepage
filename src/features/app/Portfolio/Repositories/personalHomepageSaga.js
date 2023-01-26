import { delay, put, call, takeEvery } from "redux-saga/effects";
import { getRepositories } from "./personalHomepageAPI";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./personalHomepageSlice";

function* fetchRepositoriesHandler() {
  try {
    yield delay(1000);
    const repositories = yield call(getRepositories);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}
export function* personalHomepageSaga() {
  yield takeEvery(fetchRepositories.type, fetchRepositoriesHandler);
}
