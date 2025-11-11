"use client";
import QuestionCard from "./question-card";
import { QuizProvider } from "../store/quiz-context";
import QuizResults from "./quiz-results";

const InterviewPrepApp: React.FC = () => {
  return (
    <QuizProvider>
      <div
        className={` mx-auto lg:p-8 max-w-[700px] lg:bg-white rounded-xl shadow-custom-gray`}
      >
        <QuestionCard />
        <QuizResults />
      </div>
    </QuizProvider>
  );
};

export default InterviewPrepApp;
