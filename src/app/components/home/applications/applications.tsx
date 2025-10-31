"use client";
import { useTranslation } from "react-i18next";
import PageHeader from "../../page-header";
import Body from "./components/body";

export default function Applications() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t("applications.header")}
        description={t("applications.description")}
      />
      <Body />
    </>
  );
}
