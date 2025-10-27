import FileUpload from "@/app/ui-library/components/file-upload";
import ExistingResumes from "./pages/cover-letter-generator/existing-resumes";
import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import useChooseResume from "./hooks/useChooseResume";
import Divider from "@/app/ui-library/components/divider";

export default function ChooseResume({
  handleSubmit,
  isLoading,
  buttonText,
  bottomContent,
  className,
}: {
  handleSubmit: (file: string) => void;
  isLoading: boolean;
  buttonText: string;
  bottomContent?: React.ReactNode;
  className?: string;
}) {
  const { setResume, setFile, selectedResume, uploadedFile, onSubmit } =
    useChooseResume(handleSubmit);

  return (
    <div className={`flex flex-col ${className}`}>
      <FileUpload setFileValue={setFile} />
      <Divider />
      <ExistingResumes
        selectedResume={selectedResume}
        setSelectedResume={setResume}
      />
      {bottomContent}
      <PrimaryButton
        onClick={onSubmit}
        disabled={!selectedResume && !uploadedFile}
        isLoading={isLoading}
        className="mt-6"
      >
        {buttonText}
      </PrimaryButton>
    </div>
  );
}
