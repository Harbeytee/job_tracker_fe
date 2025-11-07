import { IconButton } from "@/app/ui-library/components/buttons/icon-button";
import { useTranslation } from "react-i18next";

export default function SelectedSkills({
  skills,
  maxSkill,
  removeSkill,
}: {
  skills: string[];
  maxSkill: number;
  removeSkill: (skill: string) => void;
}) {
  const { t } = useTranslation();

  return (
    <>
      {skills.length > 0 && (
        <div className="mb-6">
          <h3
            className={`text-sm font-semibold mb-3 dark:text-slate-300 text-gray-700 flex items-center gap-2`}
          >
            {t("interview_prep.setup.skills.focus", {
              length: skills.length,
              max: maxSkill,
            })}
          </h3>
          <div
            className={`flex flex-wrap gap-3 p-3 rounded-xl border-2 transition-colors min-h-[4rem] dark:border-purple-900 dark:bg-slate-900/50 border-purple-100 bg-purple-50
                  }`}
          >
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div
                  key={skill}
                  className={`px-3 py-2 rounded-full font-medium transition-all flex items-center gap-2 text-sm whitespace-nowrap 
                            dark:bg-purple-600 text-white dark:shadow-md bg-purple-600  shadow-md
                          `}
                >
                  <span>{skill}</span>
                  <IconButton
                    className="w-4 h-4 rounded-full flex items-center justify-center bg-white/30 text-white hover:bg-white/50 transition-all !p-0"
                    color="white"
                    size={10}
                    icon="x"
                    onClick={() => removeSkill(skill)}
                    aria-label={t("interview_prep.setup.skills.remove", {
                      skill,
                    })}
                  />
                </div>
              ))
            ) : (
              <p className={`text-sm italic dark:text-slate-500 text-gray-400`}>
                {t("interview_prep.setup.skills.start_typing")},
              </p>
            )}
          </div>

          {/* MAX SKILLS WARNING */}
          {skills.length >= maxSkill && (
            <p
              className={`mt-3 text-sm font-medium dark:text-yellow-400 text-red-600`}
            >
              {t("interview_prep.setup.skills.max_reached", { max: maxSkill })},
            </p>
          )}
        </div>
      )}
    </>
  );
}
