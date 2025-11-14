import { Icon } from "@/app/ui-library/components/icons/icon";
import { useQuizContext } from "../store/quiz-context";
import ProgressBar from "./progress-bar";
import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import ScoreCircle from "@/app/components/home/resume/components/pages/ats-scanner/score-circle";
import { useTranslation } from "react-i18next";

export default function QuizResults() {
  const { gameOver, selectedSkills, calculateScore, answers, resetGame } =
    useQuizContext();
  const { t } = useTranslation();

  const total = Object.keys(answers).length;
  const score = Object.values(answers).filter((a) => a.isCorrect).length;
  const totalPercentage = Math.round((score / total) * 100);

  if (gameOver)
    return (
      <div className="space-y-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            {t("interview_prep.quiz.quiz_complete")}
          </h1>
          <p className="text-gray-600 mb-5">
            {" "}
            {t("interview_prep.quiz.perform")}
          </p>

          <ScoreCircle score={totalPercentage} size="large" />
          <p className="text-gray-600 mt-1.5 font-medium">
            {t("interview_prep.quiz.score", {
              score,
              total,
            })}
          </p>
        </div>

        {/* Scores by Skill */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {t("interview_prep.quiz.categories")}:
          </h3>
          {selectedSkills.map((skill) => {
            const { correct, total } = calculateScore(skill);
            const percentage =
              total > 0 ? Math.round((correct / total) * 100) : 0;
            return (
              <div key={skill}>
                <div className="flex items-center justify-between">
                  {" "}
                  <div className="font-semibold text-gray-800 capitalize">
                    {skill}
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-gray-900">
                      {percentage}%
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      ({correct}/{total})
                    </span>
                  </div>
                </div>

                <ProgressBar progress={percentage} />
              </div>
            );
          })}
        </div>

        {/* Answer Review */}
        <div className="text-left space-y-4 mb-6 lg:max-h-96 lg:overflow-y-auto">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-3.5">
            {t("interview_prep.quiz.review_answers")}:
          </h3>
          {Object.entries(answers).map(([key, val], index) => (
            <div
              key={key}
              className={`p-4 rounded-xl border transition-all ${
                val.isCorrect
                  ? "bg-emerald-50/70 border-emerald-200"
                  : "bg-red-50/70 border-red-200"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    val.isCorrect ? "bg-emerald-500" : "bg-red-500"
                  }`}
                >
                  {val.isCorrect ? (
                    <Icon name="check" color="white" size={13} />
                  ) : (
                    <Icon name="x" color="white" size={13} />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-0.5">
                    Q{index + 1}: {val.question}
                  </p>
                  <div className="">
                    <p className="text-gray-700">
                      <span className="font-medium text-sm text-gray-500">
                        {t("interview_prep.quiz.your_answer")}:
                      </span>{" "}
                      <span
                        className={`text-sm 
                            ${
                              val.isCorrect
                                ? "text-emerald-700"
                                : "text-red-700"
                            }
                          `}
                      >
                        {val.answer}
                      </span>
                    </p>
                    {!val.isCorrect && (
                      <p className="text-gray-700">
                        <span className="font-medium text-sm text-gray-500">
                          {t("interview_prep.quiz.correct_answer")}:
                        </span>{" "}
                        <span className="text-emerald-700 text-sm font-medium">
                          {val.correctAnswer}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <PrimaryButton onClick={resetGame} className="w-full ">
          {t("interview_prep.quiz.try_another")}
        </PrimaryButton>
      </div>
    );
}
