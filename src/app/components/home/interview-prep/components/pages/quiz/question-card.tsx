import Question from "./question";
import QuestionHeader from "./question-header";
import QuestionNav from "./question-nav";
import { useQuizContext } from "../store/quiz-context";

export default function QuestionCard() {
  const { screen, gameOver, currentQuestion } = useQuizContext();

  if (screen === "game" && !gameOver && currentQuestion)
    return (
      <div className="space-y-6">
        <QuestionHeader />
        <Question />
        <QuestionNav />
      </div>
    );
}
