import { useQuizContext } from "../store/quiz-context";

export default function Question() {
  const { currentQuestion, selectedAnswer, handleAnswer, mode } =
    useQuizContext();

  function returnBorder(index: number) {
    if (!selectedAnswer) {
      // No answer selected
      return "border-gray-300 hover:border-indigo-300 bg-gray-50";
    }

    if (mode === "survival") {
      const isCorrect = currentQuestion.correct === index;
      const isSelected = selectedAnswer === index;

      // If selected the correct answer
      if (isSelected && isCorrect) {
        return "border border-green-300 bg-green-300/20";
      }

      // If selected the wrong answer
      if (isSelected && !isCorrect) {
        return "border bg-red-50/70 border-red-200";
      }

      // If this is the correct answer but user chose wrong
      if (
        !isSelected &&
        isCorrect &&
        selectedAnswer !== currentQuestion.correct
      ) {
        return "border border-green-300 bg-green-300/20";
      }

      // Default gray for others
      return "border-gray-300 hover:border-indigo-300 bg-gray-50";
    }

    // Non-survival mode
    if (selectedAnswer === index) {
      return "border border-blue-600 bg-blue-600/20";
    }

    return "border-gray-300 hover:border-indigo-300 bg-gray-50";
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-black-300 border border-pink-400 mb-6 bg-pink-200 p-5 rounded-md">
        {currentQuestion.question}
      </h3>

      <div className="space-y-3.5">
        {currentQuestion.options.map((option, index) => {
          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-3.5 text-left rounded-lg transition-all ${returnBorder(
                index
              )}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-900">{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
