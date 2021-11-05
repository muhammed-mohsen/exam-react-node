import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStep } from "../store/questions";

const Choice = ({ choice, question }) => {
  const dispatch = useDispatch();
  const correctAnswerNumber = useSelector(
    (state) => state.questions.correctAnswerNumber
  );
  const handleChoiceClick = (choice) => {
    if (question.correctAnswer == choice) {
      return dispatch(changeStep(correctAnswerNumber + 1));
    }
    return dispatch(changeStep(correctAnswerNumber));
  };
  return (
    <div className="lg:w-1/2" onClick={() => handleChoiceClick(choice)}>
      <div className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group">
        <dt className="question">
          <div className="flex justify-between">
            <div className="text-indigo-800 font-semibold">{choice}</div>
            <div></div>
          </div>
        </dt>
      </div>
    </div>
  );
};

export default Choice;
