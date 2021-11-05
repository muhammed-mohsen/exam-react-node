import * as actions from "./constants";

export function getQuestions() {
  return {
    type: actions.GET_QUESTIONS,
  };
}
export function changeStep(payload) {
  return {
    type: actions.CHANGE_STEP,
    payload,
  };
}
export function saveName(payload) {
  return {
    type: actions.SAVE_NAME,
    payload,
  };
}

export function getQuestionsSuccess(payload) {
  return {
    type: actions.GET_QUESTIONS_SUCCESS,
    payload,
  };
}
