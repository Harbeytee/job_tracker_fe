import { createContext, useContext } from "react";
import useSetup from "../../hooks/useSetup";
import { InterviewSetupContexts } from "../../../types/interfaces";

export const SetupContext = createContext<InterviewSetupContexts | undefined>(
  undefined
);

export default function SetupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useSetup();

  return (
    <SetupContext.Provider value={value}>{children}</SetupContext.Provider>
  );
}

export function useSetupContext() {
  const context = useContext(SetupContext);
  if (context === undefined) {
    throw new Error("useSetupContext must be used within a SetupProvider");
  }
  return context;
}
