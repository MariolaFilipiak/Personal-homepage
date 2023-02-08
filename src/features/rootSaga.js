import { all } from "axios";
import { repoSaga } from "../features/Portfolio/repoSaga";

export default function* rootSaga() {
  yield all([repoSaga()]);
}
