import React from "react";
import Questions from "../../constants/index";
import SurveyQuestions from "../Questions";

export interface IQuestion {
  id?: number;
  question?: string;
  correctAnswer?: string;
}
function filterQuestionsById(questionNumber: number): IQuestion {
  const getQuestion = Questions.find((x) => x.id === questionNumber);
  return {
    id: getQuestion?.id,
    question: getQuestion?.question,
    correctAnswer: getQuestion?.correctAnswer,
  };
}

const Survey = () => {
  return <SurveyQuestions {...filterQuestionsById(1)} />;
};

export default Survey;
