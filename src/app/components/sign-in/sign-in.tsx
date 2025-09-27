"use client";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const { t } = useTranslation();
  return <div>{t("sign_in.text")}</div>;
}
