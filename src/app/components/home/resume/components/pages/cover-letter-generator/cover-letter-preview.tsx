import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import CopyToClipboard from "@/app/ui-library/components/copy-to-clipboard";
import { TextAreaField } from "@/app/ui-library/components/inputs/text-area-field";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

export default function CoverLetterPreview({
  coverLetter,
  setCoverLetter,
}: {
  coverLetter: string;
  setCoverLetter: Dispatch<SetStateAction<string>>;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mt-6 md:mt-0">
      <TextAreaField
        disabled={!!!coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        value={coverLetter}
        placeholder={t("resume.cover_letter_generator.placeholder")}
        resize="none"
        className="mb-2 leading-relaxed h-full"
      ></TextAreaField>

      {coverLetter && (
        <div className="flex justify-end mt-1.5">
          <CopyToClipboard text={coverLetter} />
          <PrimaryButton leadingIcon="download">Export</PrimaryButton>
        </div>
      )}
    </div>
  );
}
