import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function useSetup() {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [mode, setMode] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const { t } = useTranslation();
  const [step, setStep] = useState(1);

  const stepsContent = [
    {
      title: t("interview_prep.setup.role.title"),
      desc: t("interview_prep.setup.role.desc"),
      disabled: !role,
    },
    {
      title: t("interview_prep.setup.level.title"),
      desc: t("interview_prep.setup.level.desc"),
      disabled: !level,
    },
    {
      title: t("interview_prep.setup.skills.title"),
      desc: t("interview_prep.setup.skills.desc"),
      disabled: skills.length == 0,
    },
    {
      title: t("interview_prep.setup.mode.title"),
      desc: t("interview_prep.setup.mode.desc"),
      disabled: !mode,
    },
  ];

  const currentStep = stepsContent[step - 1];

  return {
    currentStep,
    setMode,
    setSkills,
    setLevel,
    setRole,
    role,
    level,
    mode,
    skills,
    step,
    setStep,
  };
}
