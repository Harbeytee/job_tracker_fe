"use client";
import { useTranslation } from "react-i18next";
import Cards from "./components/cards";
import PageHeader from "../../page-header";

export default function Resume() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <PageHeader
          title={t("resume.header")}
          description={t("resume.description")}
        />
        <Cards />
      </div>
    </div>
  );
}
