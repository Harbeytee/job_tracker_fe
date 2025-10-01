"use client";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { ProcessEnv } from "@/app/types/enums";

export const initI18n = async () => {
  await i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      supportedLngs: ["en", "es"],
      ns: ["translation"],
      defaultNS: "translation",
      debug: process.env.NODE_ENV === ProcessEnv.DEVELOPMENT,
      interpolation: {
        escapeValue: false,
      },
      // Prevent translation loading from blocking rendering
      react: {
        useSuspense: false,
      },
    });
};

export default i18n;
