import React from "react";
import { useSelector } from "react-redux";

const FinalPge = () => {
  const { correctAnswerNumber, name } = useSelector((state) => state.questions);
  return (
    <div className="w-full h-3/6 text-3xl flex flex-col text-indigo-500 	 justify-center items-center">
      <p className=" font-semibold my-4">{name}</p>
      <p>you answered {correctAnswerNumber} from 5</p>
    </div>
  );
};

export default FinalPge;
