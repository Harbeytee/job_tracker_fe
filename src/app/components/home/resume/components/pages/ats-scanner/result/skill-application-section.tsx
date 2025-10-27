import { Icon } from "@/app/ui-library/components/icons/icon";
import { SkillApplication } from "../../../../types/interfaces";
import SectionCollapsible from "../section-collapsible";
import { useTranslation } from "react-i18next";

export default function SkillApplicationSection({
  skillApplication,
}: {
  skillApplication: SkillApplication;
}) {
  const { t } = useTranslation();

  return (
    <SectionCollapsible
      title={t("resume.ats_scanner.cards.skill_application")}
      description={t("resume.ats_scanner.cards.skill_application_desc")}
      score={skillApplication.score}
      status={skillApplication.status}
      icon="trending-up"
    >
      <div className="px-6 pb-6 space-y-4 border-t pt-4">
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.achievments")} (
            {skillApplication.subheaders.quantifiedAchievements.count})
          </h4>
          <ul className="space-y-1">
            {skillApplication.subheaders.quantifiedAchievements.items.map(
              (text, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <Icon name="check" color="green-600" />

                  <span className="ml-2">{text}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.impact")} (
            {skillApplication.subheaders.actionResultExamples.count})
          </h4>
          <ul className="space-y-1">
            {skillApplication.subheaders.actionResultExamples.items.map(
              (text, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <Icon name="check" color="green-600" />

                  <span className="ml-2">{text}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.missing_evidence")} (
            {skillApplication.subheaders.missingEvidence.count})
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillApplication.subheaders.missingEvidence.items.map((m, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.improvements")}
          </h4>
          <ul className="space-y-1">
            {skillApplication.subheaders.improvementOpportunities.map(
              (o, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  {o}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </SectionCollapsible>
  );
}
