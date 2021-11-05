import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FinalPge from "./FinalPge";
import Question from "./Question";

const Questions = ({ questions }) => {
  const step = useSelector((state) => state.questions.step);
  if (step > 4) return <FinalPge />;
  return questions.map((question, index) => (
    <Question key={question._id} question={question} index={index} />
  ));
};

export default Questions;
