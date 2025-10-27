import { useTranslation } from "react-i18next";
import { SkillAccuracy } from "../../../../types/interfaces";
import SectionCollapsible from "../section-collapsible";

export default function SkillAccuracySection({
  skillAccuracy,
}: {
  skillAccuracy: SkillAccuracy;
}) {
  const { t } = useTranslation();

  return (
    <SectionCollapsible
      title={t("resume.ats_scanner.cards.skill_accuracy")}
      description={t("resume.ats_scanner.cards.skill_accuracy_desc")}
      score={skillAccuracy.score}
      status={skillAccuracy.status}
      icon="award"
    >
      <div className="px-6 pb-6 space-y-4 border-t pt-4">
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.clearly_defined_skills")} (
            {skillAccuracy.subheaders.clearlyDefined.count})
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillAccuracy.subheaders.clearlyDefined.items.map((s, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.vague_skills")} (
            {skillAccuracy.subheaders.vagueSkills.count})
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillAccuracy.subheaders.vagueSkills.items.map((s, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.overstated_claims")} (
            {skillAccuracy.subheaders.overstatedClaims.count})
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillAccuracy.subheaders.overstatedClaims.items.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.suggestions")}
          </h4>
          <ul className="space-y-1">
            {skillAccuracy.subheaders.verificationSuggestions.map((s, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-900 mb-2">
            {t("resume.ats_scanner.recommendations")}
          </h4>
          <ul className="space-y-1">
            {skillAccuracy.subheaders.specificityRecommendations.map((r, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionCollapsible>
  );
}
