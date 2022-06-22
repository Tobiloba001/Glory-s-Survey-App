import React, { FC } from "react";
import { IQuestion } from "./Survey/Survey";

const SurveyQuestions: FC<IQuestion> = (question: IQuestion) => (
  <div>
    <p>Question {question.id}</p>
    <p>{question.question}</p>
  </div>
);

export default SurveyQuestions;
