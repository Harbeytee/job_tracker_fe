"use client";
import { ReactNode, createContext, useContext } from "react";
import { QuizContextInterface } from "../../../types/interfaces";
import useQuiz from "../../hooks/useQuiz";
const QuizContext = createContext<QuizContextInterface | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const value = useQuiz();

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
}
