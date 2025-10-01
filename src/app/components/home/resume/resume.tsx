"use client";
import { useTranslation } from "react-i18next";
import Cards from "./components/cards";

export default function resume() {
  const { t } = useTranslation();

  return (
    <div className="p-14">
      <div>
        <h2 className="text-primary text-3xl font-bold">
          {t("resume.header")}
        </h2>
        <p className="my-4 max-w-[850px] text-lg">{t("resume.description")}</p>
        <Cards />
      </div>
    </div>
  );
}
