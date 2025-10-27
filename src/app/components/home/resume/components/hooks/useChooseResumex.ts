import { useState } from "react";
import { Resume, ScanResults } from "../../types/interfaces";

export default function useChooseResumex(
  handleSubmit: (val: { jobDescription?: string; file: string | null }) => void
) {
  const [jobDescription, setJobDescription] = useState<string>("");
  const [showJobDescInput, setShowJobDescInput] = useState<boolean>(false);
  const [uploadMethod, setUploadMethod] = useState<"upload" | "existing">(
    "upload"
  );
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const onSubmit = () => {
    handleSubmit({ file: selectedFile });
  };

  return {
    onSubmit,
    jobDescription,
    setJobDescription,
    showJobDescInput,
    setShowJobDescInput,
    uploadMethod,
    setUploadMethod,
    setSelectedFile,
    selectedFile,
  };
}
