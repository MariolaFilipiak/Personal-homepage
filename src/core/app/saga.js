import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../../features/app/Portfolio/Repositories/personalHomepageSaga";

export default function* saga() {
  yield all([personalHomepageSaga()]);
}
