"use client";
import { createContext, Dispatch, SetStateAction } from "react";
import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import { InterviewFlowContexts } from "../../../types/interfaces";
import { OutlineButton } from "@/app/ui-library/components/buttons/outline-button";
import useSetup from "../../hooks/useSetup";
import { useTranslation } from "react-i18next";
import { getModes } from "../../../utils/helpers";

export const FlowContext = createContext<InterviewFlowContexts | undefined>(
  undefined
);

export default function FlowContainer({
  step,
  setStep,
  children,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  const modes = getModes();

  const {
    currentStep,
    setMode,
    setSkills,
    setLevel,
    setRole,
    role,
    level,
    mode,
    skills,
  } = useSetup({
    step,
  });

  return (
    <FlowContext.Provider
      value={{
        setRole,
        role,
        setLevel,
        level,
        mode,
        setMode,
        skills,
        setSkills,
      }}
    >
      <div className="bg-white shadow-custom-gray dark:shadow-none dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl dark:border border-slate-700">
        <div className="mb-6">
          <h2 className="text-3xl font-bold dark:text-white mb-2 flex items-center gap-2">
            {currentStep.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-[600px]">
            {currentStep.desc}
          </p>
        </div>

        {children}

        <div className={`${step == 1 ? "" : "flex gap-3"} mt-8`}>
          {step !== 1 && (
            <OutlineButton
              onClick={() => setStep(step - 1)}
              className="flex-1 !bg-gray-50 text-gray-500"
            >
              {t("interview_prep.back")}
            </OutlineButton>
          )}

          <PrimaryButton
            iconSize={20}
            onClick={() => (step == 4 ? "" : setStep(step + 1))}
            disabled={currentStep.disabled}
            trailingIcon="chevron-right"
            className={`${
              step == 1 ? "mt-6 w-full text-lg" : " gap-2 flex-1"
            } bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center hover:from-purple-500 hover:to-pink-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {" "}
            {step == 4
              ? t("interview_prep.start", {
                  action: mode && modes.find((m) => m.id === mode)?.title,
                })
              : t("interview_prep.continue")}
          </PrimaryButton>
        </div>
      </div>
    </FlowContext.Provider>
  );
}
