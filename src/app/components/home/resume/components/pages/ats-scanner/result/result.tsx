import { TextButton } from "@/app/ui-library/components/buttons/text-button";
import React, { Dispatch, SetStateAction } from "react";
import { Resume, ScanResults } from "../../../../types/interfaces";
import JobMatchSection from "./job-match-section";
import SkillAccuracySection from "./skill-accuracy-section";
import SkillApplicationSection from "./skill-application-section";
import AtsReadabilitySection from "./ats-readability-section";
import { useTranslation } from "react-i18next";
import OverallScoreSection from "./overall-score-section";

export default function Result({
  results,
  setResults,
}: {
  results: ScanResults;
  setResults: Dispatch<SetStateAction<ScanResults | null>>;
}) {
  const getFileName = (file: Resume | File | null): string => {
    if (!file) return "";
    if (file instanceof File) return file.name;
    return file.name;
  };

  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <TextButton
        onClick={() => setResults(null)}
        className="flex items-center text-indigo-600 hover:text-indigo-700 font-semibold mb-4"
        leadingIcon="chevron-left"
      >
        {" "}
        {t("resume.ats_scanner.scan_another_resume")}
      </TextButton>
      <OverallScoreSection overallScore={results.overallScore} />
      <JobMatchSection jobMatch={results.jobMatch} />
      <SkillAccuracySection skillAccuracy={results.skillAccuracy} />
      <SkillApplicationSection skillApplication={results.skillApplication} />
      <AtsReadabilitySection atsReadability={results.atsReadability} />
    </div>
  );
}
