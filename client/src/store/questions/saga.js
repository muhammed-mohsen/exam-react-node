import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../utils/api";
// import headers from "utils/headers";
import { getQuestionsSuccess } from "./actions";
import { GET_QUESTIONS } from "./constants";

export function* getQuestions(payload) {
  try {
    let { data } = yield call(api.get, "/questions");

    yield put(
      getQuestionsSuccess({
        questions: data,
      })
    );
  } catch (error) {
    console.log(error, "error");
  }
}

export default function* rootSage() {
  yield takeLatest(GET_QUESTIONS, getQuestions);
}
