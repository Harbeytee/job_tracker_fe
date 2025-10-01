"use client";
import { useTranslation } from "react-i18next";
import LetterGenerator from "./components/pages/cover-letter-generator/letter-generator";

export default function CoverLetterGenerator() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-primary text-xl text-center md:text-left md:text-3xl font-bold">
        {t("resume.cover_letter_generator.header")}
      </h2>
      <p className="my-4 max-w-[850px] md:text-lg">
        {t("resume.cover_letter_generator.description")}
      </p>
      <LetterGenerator />
    </>
  );
}
