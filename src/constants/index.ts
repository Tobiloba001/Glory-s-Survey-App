type QuestionType = {
  id: number;
  question: string;
  correctAnswer: string;
};

const Questions: QuestionType[] = [
  {
    id: 1,
    question: "How often do you visit this website?",
    correctAnswer: "",
  },
  { id: 2, question: "Please select at least one option", correctAnswer: "" },
  { id: 3, question: "Where are you from?", correctAnswer: "" },
];

export default Questions;
