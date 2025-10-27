import React from "react";
import { JobMatch } from "../../../../types/interfaces";
import SectionCollapsible from "../section-collapsible";
import { Icon } from "@/app/ui-library/components/icons/icon";
import { useTranslation } from "react-i18next";

export default function JobMatchSection({ jobMatch }: { jobMatch?: JobMatch }) {
  const { t } = useTranslation();

  if (jobMatch)
    return (
      <SectionCollapsible
        title={t("resume.ats_scanner.cards.job_match_score")}
        description={t("resume.ats_scanner.cards.job_match_score_desc")}
        score={jobMatch.score}
        status={jobMatch.status}
        icon="target"
      >
        <div className="px-6 pb-6 space-y-4 border-t pt-4">
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("resume.ats_scanner.matched_keywords")} (
              {jobMatch.subheaders.matchedKeywords.count}/
              {jobMatch.subheaders.matchedKeywords.total})
            </h4>
            <div className="flex flex-wrap gap-2">
              {jobMatch.subheaders.matchedKeywords.items.map((k, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("resume.ats_scanner.missing_keywords")} (
              {jobMatch.subheaders.missingKeywords.count})
            </h4>
            <div className="flex flex-wrap gap-2">
              {jobMatch.subheaders.missingKeywords.items.map((keyword, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("resume.ats_scanner.role_alignment")} (
              {jobMatch.subheaders.roleAlignment.score}%)
            </h4>
            <p className="text-sm text-gray-700">
              {jobMatch.subheaders.roleAlignment.message}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("resume.ats_scanner.requirements_met")} (
              {jobMatch.subheaders.requirementsMet.met}/
              {jobMatch.subheaders.requirementsMet.total})
            </h4>
            <div className="space-y-2">
              {jobMatch.subheaders.requirementsMet.items.map((req, i) => (
                <div key={i} className="flex items-center text-sm">
                  {req.met ? (
                    <Icon size={16} name="check" color="green-600" />
                  ) : (
                    <Icon size={16} name="close" color="red-600" />
                  )}
                  <span
                    className={`${
                      req.met ? "text-gray-700" : "text-red-700"
                    } ml-2`}
                  >
                    {req.requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-2">
              {" "}
              {t("resume.ats_scanner.resume_gaps")}{" "}
            </h4>
            <ul className="space-y-1">
              {jobMatch.subheaders.gapAnalysis.map((gap, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  {gap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionCollapsible>
    );
}
