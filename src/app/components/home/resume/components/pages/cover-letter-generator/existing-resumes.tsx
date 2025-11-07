import Label from "@/app/ui-library/components/inputs/label";
import { useTranslation } from "react-i18next";
import { existingResumes } from "../../../utils/mockData";
import TabSelectGroup from "@/app/ui-library/components/buttons/tab-select-group";

export default function ExistingResumes({
  setSelectedResume,
}: {
  setSelectedResume: (val: string) => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <Label text={t("resume.select_resume")} />

      <div
        className="flex-1 overflow-y-auto space-y-2 pr-2 min-h-0"
        style={{ maxHeight: "400px" }}
      >
        <TabSelectGroup
          tabs={existingResumes}
          handleClick={setSelectedResume}
        />
      </div>
    </div>
  );
}
