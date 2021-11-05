import React from "react";
import { useSelector } from "react-redux";
import Choice from "./Choice";

const Question = ({ question, index }) => {
  const step = useSelector((state) => state.questions.step);

  return (
    <div className="mt-32" style={{ display: step === index ? "" : "none" }}>
      <div className="mx-auto text-center px-4 mt-12 text-2xl text-indigo-900 font-semibold">
        {question.question}
      </div>
      <dl className="mt-20 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col lg:flex-row lg:flex-wrap">
        {question.choices.map((choice) => (
          <Choice key={choice} choice={choice} question={question} />
        ))}
      </dl>
    </div>
  );
};

export default Question;
