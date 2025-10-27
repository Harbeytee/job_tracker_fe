import React from "react";
import { ATSReadability } from "../../../../types/interfaces";
import { Icon } from "@/app/ui-library/components/icons/icon";
import SectionCollapsible from "../section-collapsible";
import { useTranslation } from "react-i18next";

export default function AtsReadabilitySection({
  atsReadability,
}: {
  atsReadability: ATSReadability;
}) {
  const { t } = useTranslation();

  return (
    <SectionCollapsible
      title={t("resume.ats_scanner.cards.ats_readability")}
      description={t("resume.ats_scanner.cards.ats_readability_desc")}
      score={atsReadability.score}
      status={atsReadability.status}
      icon="eye"
    >
      <div className="px-6 pb-6 space-y-4 border-t pt-4">
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.format_compatibility")}
          </h4>
          <div className="flex items-center">
            <Icon name="check" size={20} color="green-600" />
            <span className="text-sm text-gray-700 ml-2">
              {atsReadability.subheaders.formatCompatibility.status}:{" "}
              {atsReadability.subheaders.formatCompatibility.message}
            </span>
          </div>
        </div>
        {atsReadability.subheaders.parsingIssues.count > 0 && (
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("resume.ats_scanner.parsing_issues")} (
              {atsReadability.subheaders.parsingIssues.count})
            </h4>
            <ul className="space-y-1">
              {atsReadability.subheaders.parsingIssues.items.map((issue, i) => (
                <li key={i} className="text-sm text-red-700 flex items-start">
                  <Icon size={16} name="close" color="red-600" />
                  <span className="ml-2">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.section_recognition")}
          </h4>
          <div className="space-y-2">
            <div>
              <p className="text-xs text-gray-600 mb-1">
                {" "}
                {t("resume.ats_scanner.recognized")}
              </p>
              <div className="flex flex-wrap gap-2">
                {atsReadability.subheaders.sectionRecognition.recognized.map(
                  (sec, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs"
                    >
                      {sec}
                    </span>
                  )
                )}
              </div>
            </div>
            {atsReadability.subheaders.sectionRecognition.notRecognized.length >
              0 && (
              <div>
                <p className="text-xs text-gray-600 mb-1">
                  {" "}
                  {t("resume.ats_scanner.not_recognized")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {atsReadability.subheaders.sectionRecognition.notRecognized.map(
                    (sec, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs"
                      >
                        {sec}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.contact_information")}
          </h4>
          <div className="flex items-start">
            <Icon name="check" size={20} color="green-600" />

            <div className="ml-2">
              <p className="text-sm text-gray-700 font-medium">
                {atsReadability.subheaders.contactInformation.status}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {atsReadability.subheaders.contactInformation.items.map(
                  (item, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.file_format")}
          </h4>
          <p className="text-sm text-gray-700">
            {atsReadability.subheaders.fileFormatRecommendation}
          </p>
        </div>
        {atsReadability.subheaders.designWarnings.length > 0 && (
          <div className="bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("resume.ats_scanner.design_warnings")}
            </h4>
            <ul className="space-y-1">
              {atsReadability.subheaders.designWarnings.map((warning, i) => (
                <li
                  key={i}
                  className="text-sm text-yellow-700 flex items-center"
                >
                  <Icon name="alert-circle" size={16} color="yellow-600" />
                  <span className="ml-2"> {warning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.optimization_tips")}
          </h4>
          <ul className="space-y-1">
            {atsReadability.subheaders.optimizationTips.map((tip, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">💡</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionCollapsible>
  );
}
