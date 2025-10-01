import React from "react";
import { useTranslation } from "react-i18next";

export default function Divider({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) {
  const { t } = useTranslation();
  const lineClass = "bg-gray-300 block w-full h-[1px] rounded-lg";
  return (
    <div className={`flex items-center mb-6 relative ${className}`}>
      <div className={lineClass}></div>
      <p className="whitespace-nowrap mx-4 text-gray-500"> {text || t("or")}</p>
      <div className={lineClass}></div>
    </div>
  );
}
