import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import InputField from "@/app/ui-library/components/inputs/input-field";
import { Icon } from "@/app/ui-library/components/icons/icon";
import SelectedSkills from "./selected-skills";
import AvailableSkills from "./available-skills";
import useSetSkills from "../../../hooks/useSetSkills";
import { useTranslation } from "react-i18next";

export default function SelectSkills({ step }: { step: number }) {
  const { t } = useTranslation();
  const {
    removeSkill,
    addCustomSkill,
    toggleSkill,
    filteredSkills,
    skillSearch,
    skills,
    maxSkill,
    setSkillSearch,
  } = useSetSkills();

  if (step == 3)
    return (
      <>
        <div className="mb-4 relative">
          <InputField
            leadingContent={<Icon name="search" size={20} color="gray-500" />}
            value={skillSearch}
            disabled={skills.length >= maxSkill && skillSearch.trim() === ""}
            placeholder={t("interview_prep.setup.skills.placeholder")}
            onChange={(e) => setSkillSearch(e.target.value)}
            className="!px-4 !py-4 rounded-xl  bg-gray-50 dark:bg-slate-900"
            trailingContent={
              skillSearch && (
                <PrimaryButton
                  disabled={!skillSearch.trim() || skills.length >= maxSkill}
                  onClick={addCustomSkill}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg transition-all flex items-center gap-1 dark:bg-purple-500  hover:dark:bg-purple-600 bg-purple-600 text-white hover:bg-purple-700`}
                >
                  + {t("add")}
                </PrimaryButton>
              )
            }
          />
        </div>

        {/* Selected Skills */}
        <SelectedSkills
          removeSkill={removeSkill}
          skills={skills}
          maxSkill={maxSkill}
        />

        {/* Available Skills */}
        <AvailableSkills
          isSearching={false}
          filteredSkills={filteredSkills}
          skills={skills}
          maxSkill={maxSkill}
          skillSearch={skillSearch}
          toggleSkill={toggleSkill}
        />
      </>
    );
}
