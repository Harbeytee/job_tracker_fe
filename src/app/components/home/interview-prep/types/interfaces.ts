import { Dispatch, SetStateAction } from "react";
import { GameMode, Screen } from "./types";
import { IconNames } from "@/app/ui-library/types/types";

export interface InterviewSetupContexts {
  setRole: Dispatch<SetStateAction<string>>;
  role: string;
  setLevel: Dispatch<SetStateAction<string>>;
  level: string;
  setMode: Dispatch<SetStateAction<string>>;
  skills: string[];
  setSkills: Dispatch<SetStateAction<string[]>>;
  mode: string;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  currentStep: number;
}

export interface QuestionsDatabase {
  [key: string]: Question[];
}

export interface Question {
  question: string;
  options: string[];
  correct: number;
}

export interface Answer {
  answer: number | "";
  correct: boolean;
  question: Question;
  isCorrect: boolean;
  correctAnswer: string;
}

export interface QuestionWithUser {
  skill: string;
  question: string;
  options: string[];
  correctAnswer: string;
  answer: string;
  isCorrect: boolean;
}
export interface QuizContextInterface {
  currentSkill: string;
  questions: Question[];
  currentQuestionIndex: number;
  timeLeft: number;
  mode: GameMode;
  selectedSkills: string[];
  currentSkillIndex: number;
  handleNextQuestion: () => void;
  screen: Screen;
  gameOver: boolean;
  currentQuestion: Question;
  selectedAnswer: number | null;
  handleAnswer: (answerIndex: number) => void;
  calculateScore: (skill: string) => { correct: number; total: number };
  answers: QuestionWithUser[];
  resetGame: () => void;
  lives: number;
}

export interface Quiz {
  mode: GameMode;
  selectedSkills: string[];
  questionsDB: QuestionsDatabase;
}

interface Feature {
  Icon: IconNames;
  text: string;
}

export interface ModeDetails {
  mode: GameMode;
  color: string;
  Icon: IconNames;
  title: string;
  description: string;
  features: Feature[];
}
