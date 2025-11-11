import { useState } from "react";
import { availableSkills } from "../../utils/helpers";
import { useSetupContext } from "../pages/store/setup-context";

export default function useSetSkills() {
  //to select skill
  const { skills, setSkills, step } = useSetupContext();
  const maxSkill = 5;

  const toggleSkill = (skill: string) => {
    setSkills((prev) => {
      if (prev.includes(skill)) {
        // If skill is already selected, remove it
        return prev.filter((s) => s !== skill);
      } else if (prev.length < maxSkill) {
        // If skill limit is not reached, add the new skill
        return [...prev, skill];
      }
      // Do nothing if limit is reached
      return prev;
    });
  };

  const [skillSearch, setSkillSearch] = useState("");

  const addCustomSkill = () => {
    const trimmedSkill = skillSearch.trim();
    if (
      trimmedSkill &&
      !skills.includes(trimmedSkill) &&
      skills.length < maxSkill
    ) {
      setSkills((prev) => [...prev, trimmedSkill]);
      setSkillSearch("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  // Filter available skills that are NOT already selected
  const filteredSkills = availableSkills
    .filter((skill) => !skills.includes(skill))
    .filter((skill) => skill.toLowerCase().includes(skillSearch.toLowerCase()));

  return {
    removeSkill,
    addCustomSkill,
    toggleSkill,
    filteredSkills,
    skillSearch,
    skills,
    maxSkill,
    setSkillSearch,
    step,
  };
}
