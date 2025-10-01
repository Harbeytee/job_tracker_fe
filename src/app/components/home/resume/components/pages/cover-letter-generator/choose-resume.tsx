import FileUpload from "@/app/ui-library/components/file-upload";
import ExistingResumes from "./existing-resumes";
import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import { useTranslation } from "react-i18next";
import useGenerate from "../../hooks/cover-letter-generator/useGenerate";
import Divider from "@/app/ui-library/components/divider";
import { Dispatch, SetStateAction } from "react";

export default function ChooseResume({
  setCoverLetter,
}: {
  setCoverLetter: Dispatch<SetStateAction<string>>;
}) {
  const { t } = useTranslation();

  const {
    setResume,
    setFile,
    handleGenerate,
    isGenerating,
    selectedResume,
    uploadedFile,
  } = useGenerate(setCoverLetter);

  return (
    <div className="flex flex-col">
      <FileUpload setFileValue={setFile} />
      <Divider />
      <ExistingResumes
        selectedResume={selectedResume}
        setSelectedResume={setResume}
      />
      <PrimaryButton
        onClick={handleGenerate}
        disabled={!selectedResume && !uploadedFile}
        isLoading={isGenerating}
        className="mt-6"
      >
        {t("resume.cover_letter_generator.generate_cover_letter")}
      </PrimaryButton>
    </div>
  );
}
