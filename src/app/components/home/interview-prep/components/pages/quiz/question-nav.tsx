import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import { useQuizContext } from "../store/quiz-context";
import { useTranslation } from "react-i18next";

export default function QuestionNav() {
  const { t } = useTranslation();
  const {
    questions,
    currentQuestionIndex,
    currentSkillIndex,
    handleNextQuestion,
    mode,
    selectedSkills,
  } = useQuizContext();

  const isLastQuestion =
    currentQuestionIndex === questions.length - 1 &&
    currentSkillIndex == selectedSkills.length - 1;

  return (
    <>
      {mode !== "survival" && (
        <PrimaryButton
          onClick={handleNextQuestion}
          className={`px-6 py-3.5 text-white rounded-lg font-semibold transition-colors w-full ${
            isLastQuestion ? "!bg-green-600  hover:bg-green-700 " : ""
          }`}
        >
          {t(isLastQuestion ? "interview_prep.quiz.finish" : "next")}
        </PrimaryButton>
      )}
    </>
  );
}
