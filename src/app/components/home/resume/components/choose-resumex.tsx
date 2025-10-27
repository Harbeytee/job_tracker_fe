import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import useChooseResumex from "./hooks/useChooseResumex";
import FileUpload from "@/app/ui-library/components/file-upload";
import ExistingResumes from "./pages/cover-letter-generator/existing-resumes";
import { TextButton } from "@/app/ui-library/components/buttons/text-button";
import { useTranslation } from "react-i18next";

export default function ChooseResume({
  loading,
  handleSubmit,
}: {
  loading: boolean;
  handleSubmit: (val: { jobDescription?: string; file: string | null }) => void;
}) {
  const { t } = useTranslation();
  const {
    setSelectedFile,
    onSubmit,
    jobDescription,
    setJobDescription,
    showJobDescInput,
    setShowJobDescInput,
    uploadMethod,
    setUploadMethod,
    selectedFile,
  } = useChooseResumex(handleSubmit);

  return (
    <>
      <div className="bg-white rounded-xl shadow-custom-gray p-8 mb-6 w-full lg:w-[70%] mx-auto">
        <div className="flex gap-4 mb-6">
          <PrimaryButton
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
              uploadMethod === "upload"
                ? "bg-indigo-600 text-white"
                : "!bg-gray-100 !text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => {
              setUploadMethod("upload");
              setSelectedFile("");
            }}
            leadingIcon="upload"
          >
            {t("resume.upload_resume")}
          </PrimaryButton>
          <PrimaryButton
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
              uploadMethod === "existing"
                ? "bg-indigo-600 text-white"
                : "!bg-gray-100 !text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => {
              setUploadMethod("existing");
              setSelectedFile("");
            }}
            leadingIcon="document"
          >
            {t("resume.select_resume")}
          </PrimaryButton>
        </div>

        {uploadMethod === "upload" && (
          <FileUpload setFileValue={setSelectedFile} />
        )}

        {uploadMethod === "existing" && (
          <ExistingResumes
            selectedResume={selectedFile}
            setSelectedResume={setSelectedFile}
          />
        )}

        <div className="mt-6">
          <TextButton
            onClick={() => setShowJobDescInput(!showJobDescInput)}
            leadingIcon="target"
            className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm mb-3"
          >
            {showJobDescInput
              ? "Hide Job Description"
              : "Add Job Description (Optional)"}
          </TextButton>

          {showJobDescInput && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {t("resume.ats_scanner.job_desc_info")}
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here to check how well your resume matches..."
                className="w-full h-40 p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-sm resize-none"
              />
              <p className="text-xs text-gray-500">
                {t("resume.ats_scanner.job_desc_info")}
              </p>
            </div>
          )}
        </div>

        <button
          onClick={onSubmit}
          disabled={!selectedFile || loading}
          className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Scanning Resume..." : "Scan Resume"}
        </button>
      </div>
    </>
  );
}
