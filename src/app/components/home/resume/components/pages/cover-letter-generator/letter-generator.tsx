import ChooseResume from "../../choose-resume";
import CoverLetterPreview from "./cover-letter-preview";
import useGenerate from "../../hooks/cover-letter-generator/useGenerate";
import { useTranslation } from "react-i18next";

export default function LetterGenerator() {
  const { t } = useTranslation();
  const { coverLetter, handleGenerate, isGenerating, setCoverLetter } =
    useGenerate();

  return (
    <div className="grid lg:grid-cols-2 gap-6 h-full max-h-[73vh]">
      <ChooseResume
        handleSubmit={handleGenerate}
        isLoading={isGenerating}
        buttonText={t("resume.cover_letter_generator.generate_cover_letter")}
      />
      <CoverLetterPreview
        coverLetter={coverLetter}
        setCoverLetter={setCoverLetter}
      />
    </div>
  );
}
