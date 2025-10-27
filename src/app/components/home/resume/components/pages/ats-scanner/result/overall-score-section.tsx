import React from "react";
import ScoreCircle from "../score-circle";
import { useTranslation } from "react-i18next";

export default function OverallScoreSection({
  overallScore,
}: {
  overallScore: number;
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-custom-gray p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t("resume.ats_scanner.result_header")}
          </h2>
          <p className="text-gray-600">{t("resume.ats_scanner.result_desc")}</p>
          <p className="text-sm text-gray-500 mt-2">
            {/* Resume: {getFileName(selectedFile)} */}
          </p>
        </div>
        <ScoreCircle score={overallScore} />
      </div>
    </div>
  );
}
