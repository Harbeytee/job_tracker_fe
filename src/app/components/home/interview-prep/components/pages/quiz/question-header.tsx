import { Icon } from "@/app/ui-library/components/icons/icon";
import Timer from "./timer";
import ProgressBar from "./progress-bar";
import { useQuizContext } from "../store/quiz-context";
import { useTranslation } from "react-i18next";

export default function QuestionHeader() {
  const { t } = useTranslation();
  const {
    currentSkill,
    questions,
    currentQuestionIndex,
    timeLeft,
    mode,
    lives,
  } = useQuizContext();

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className=" mb-10">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Frontend Interview</h2>
        <p className="text-sm text-gray-600">{currentSkill}</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="">
          <p className="mb-1 text-sm">{t("interview_prep.quiz.question")}</p>
          <p className="text-3xl">
            <span className="text-pink-600">{currentQuestionIndex + 1}</span>/
            {questions.length}
          </p>
          {mode === "survival" && (
            <div className="flex gap-1 mt-4 text-red-600">
              {[...Array(3)].map((_, i) => (
                <Icon
                  key={i}
                  name="heart"
                  color="red-600"
                  fill={i < lives ? "currentColor" : "none"}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          {(mode === "challenge" || mode == "survival") && (
            <Timer timeRemaining={timeLeft} duration={30} />
          )}
        </div>
      </div>

      <ProgressBar progress={progress} />
    </div>
  );
}
