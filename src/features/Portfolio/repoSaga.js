import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "../getRepositories";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./repoSlice";

function* fetchRepositoriesHandler() {
  try {
    yield delay(2000);
    const repositories = yield call(getRepositories);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* repoSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
