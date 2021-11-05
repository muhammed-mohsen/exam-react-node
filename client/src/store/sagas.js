import { all, fork } from "redux-saga/effects";
import { questionSaga } from "./questions";
export default function* rootSaga() {
  yield all([fork(questionSaga)]);
}
