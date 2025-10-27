import { useState } from "react";

export default function useChooseResume(handleSubmit: (file: string) => void) {
  const [selectedResume, setSelectedResume] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const setFile = (file: string | null) => {
    setUploadedFile(file);
    setSelectedResume("");
  };

  const setResume = (resume: string) => {
    setSelectedResume(resume);
    setUploadedFile(null);
  };

  const onSubmit = () => {
    handleSubmit(uploadedFile || selectedResume);
  };
  return {
    setResume,
    setFile,
    selectedResume,
    uploadedFile,
    onSubmit,
  };
}
