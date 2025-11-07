import Loader from "@/app/ui-library/components/Loader";
import { useTranslation } from "react-i18next";

export default function AvailableSkills({
  isSearching,
  filteredSkills,
  maxSkill,
  skillSearch,
  skills,
  toggleSkill,
}: {
  isSearching: boolean;
  filteredSkills: string[];
  maxSkill: number;
  skillSearch: string;
  skills: string[];
  toggleSkill: (skill: string) => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      <h3
        className={`text-sm font-semibold mb-3 dark:text-slate-300 text-gray-700`}
      >
        {isSearching
          ? t("interview_prep.setup.skills.searching")
          : skillSearch.trim()
          ? t("interview_prep.setup.skills.matching", {
              length: filteredSkills.length,
            })
          : t("interview_prep.setup.skills.popular")}
      </h3>
      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-2 -m-2 border-t pt-3 transition-colors">
        {isSearching ? (
          <div className="flex w-full justify-center items-center py-4">
            <Loader />
            <span className={"dark:text-slate-400 text-gray-600"}>
              {t("interview_prep.setup.skills.fetching")}
            </span>
          </div>
        ) : filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => {
            const isDisabled = skills.length >= maxSkill;
            return (
              <button
                type="button"
                disabled={isDisabled}
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={` px-3 py-1.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap border dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 ${
                  isDisabled
                    ? "opacity-50"
                    : "hover:dark:bg-purple-800/50 hover:dark:border-purple-600 hover:bg-purple-50 hover:border-purple-500"
                } bg-gray-50 text-gray-700 border-gray-100 `}
              >
                {skill}
              </button>
            );
          })
        ) : (
          <p className={`text-sm dark:text-slate-500 text-gray-500`}>
            {skillSearch.trim()
              ? `No suggestions matching "${skillSearch.trim()}". Use 'Add Custom' above to proceed.`
              : "All popular skills have been selected or are unavailable."}
          </p>
        )}
      </div>
    </div>
  );
}
