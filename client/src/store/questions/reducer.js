import { CHANGE_STEP, GET_QUESTIONS_SUCCESS, SAVE_NAME } from "./constants";

const initialState = {
  step: 0,
  correctAnswerNumber: 0,
  name: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload };
    case CHANGE_STEP: {
      return {
        ...state,
        step: state.step + 1,
        correctAnswerNumber: action.payload,
      };
    }
    case SAVE_NAME: {
      return { ...state, name: action.payload };
    }
    default:
      return state;
  }
};
