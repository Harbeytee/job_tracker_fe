import { Icon } from "@/app/ui-library/components/icons/icon";
import Label from "@/app/ui-library/components/inputs/label";
import { useTranslation } from "react-i18next";
import { existingResumes } from "../../../utils/mockData";

export default function ExistingResumes({
  setSelectedResume,
  selectedResume,
}: {
  setSelectedResume: (val: string) => void;
  selectedResume: string;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <Label text={t("resume.cover_letter_generator.generate_cover_letter")} />

      <div
        className="flex-1 overflow-y-auto space-y-2 pr-2 min-h-0"
        style={{ maxHeight: "400px" }}
      >
        {existingResumes.map((resume) => (
          <div
            key={resume.id}
            onClick={() => {
              setSelectedResume(resume.id);
            }}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              selectedResume === resume.id
                ? "border-primary/50 bg-primary/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-start gap-2.5">
              <Icon name="document" color="grey-400" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {resume.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{resume.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
