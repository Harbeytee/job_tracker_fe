import { useCallback, useEffect, useMemo, useState } from "react";
import { questionsDB } from "../../utils/mockData";
import { Answer, QuestionWithUser, Quiz } from "../../types/interfaces";
import { GameMode, Screen } from "../../types/types";

export default function useQuiz() {
  const quiz: Quiz | null = {
    mode: "survival",
    selectedSkills: ["html", "css"],
    questionsDB,
  };

  const INITIAL_LIVES = 3;
  const INITIAL_TIME = 30;

  const [screen, setScreen] = useState<Screen>("game");
  const [selectedSkills, setSelectedSkills] = useState(quiz.selectedSkills);
  const [mode, setMode] = useState<GameMode>(quiz.mode);
  const [currentSkillIndex, setCurrentSkillIndex] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState({});
  const [lives, setLives] = useState<number>(INITIAL_LIVES);
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_TIME);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentSkill = selectedSkills[currentSkillIndex];
  const questions = useMemo(
    () => (currentSkill ? quiz.questionsDB[currentSkill] : []),
    [quiz.questionsDB, currentSkill]
  );
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answerIndex: number): void => {
    if (gameOver) return;

    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correct;
    const key = `${currentSkill}-${currentQuestionIndex}`;

    setAnswers({
      ...answers,
      [key]: {
        answer: answerIndex,
        correct: isCorrect,
        question: currentQuestion,
      },
    });

    if (mode === "survival") {
      if (!isCorrect) {
        const newLives = lives - 1;
        setLives(newLives);
        if (newLives === 0) {
          setGameOver(true);
          return;
        }
      }
      setTimeout(() => handleNextQuestion(), 500);
    }
  };

  const handleNextQuestion = useCallback((): void => {
    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(30);
    } else if (currentSkillIndex < selectedSkills.length - 1) {
      setCurrentSkillIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
      setTimeLeft(30);
    } else {
      setGameOver(true);
    }
  }, [
    currentQuestionIndex,
    currentSkillIndex,
    questions.length,
    selectedSkills.length,
  ]);

  //to auto change question once timer ends
  useEffect(() => {
    if (gameOver || screen !== "game") return;
    if (mode !== "challenge" && mode !== "survival") return;

    if (timeLeft <= 0) {
      // Time ran out
      if (mode === "challenge") {
        handleNextQuestion();
      } else if (mode === "survival" && !selectedAnswer) {
        const newLives = lives - 1;
        setLives(newLives);

        if (newLives <= 0) {
          setGameOver(true);
        } else {
          handleNextQuestion();
        }
      }
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [
    timeLeft,
    mode,
    gameOver,
    screen,
    lives,
    handleNextQuestion,
    selectedAnswer,
  ]);

  const calculateScore = (
    skill: string
  ): { correct: number; total: number } => {
    const skillAnswers = reviewedQuestions.filter(
      (question) => question.skill == skill
    );

    const correct = skillAnswers.filter((answer) => answer.isCorrect).length;

    return { correct, total: skillAnswers.length };
  };

  const resetGame = (): void => {
    setScreen("game");
    setSelectedSkills(quiz.selectedSkills);
    setMode(quiz.mode);
    setCurrentSkillIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setLives(INITIAL_LIVES);
    setTimeLeft(INITIAL_TIME);
    setGameOver(false);
    setSelectedAnswer(null);
  };

  function getReviewedQuestions(
    selectedSkills: string[],
    answers: Record<string, Answer>
  ): QuestionWithUser[] {
    const result: QuestionWithUser[] = [];

    for (const skill of selectedSkills) {
      const questions = questionsDB[skill];

      questions.forEach((q, index) => {
        const key = `${skill}-${index}`;
        const userAnswer = answers[key]?.answer ?? "";
        const isCorrect = userAnswer !== "" && userAnswer === q.correct;

        result.push({
          skill,
          question: q.question,
          options: q.options,
          correctAnswer: q.options[q.correct],
          answer: userAnswer !== "" ? q.options[userAnswer] : "",
          isCorrect,
        });
      });
    }

    return result;
  }

  //total questions including user's answer
  const reviewedQuestions = getReviewedQuestions(selectedSkills, answers);

  return {
    currentSkill,
    questions,
    currentQuestionIndex,
    timeLeft,
    mode,
    selectedSkills,
    currentSkillIndex,
    handleNextQuestion,
    screen,
    gameOver,
    currentQuestion,
    selectedAnswer,
    handleAnswer,
    calculateScore,
    answers: reviewedQuestions,
    resetGame,
    lives,
  };
}
