"use client";
import { useTranslation } from "react-i18next";
import PageHeader from "../../page-header";
import Body from "./components/body";
import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import { useAddApplication } from "./hooks/useAddApplications";
import { mockApplications } from "./utils/mockData";

export default function Applications() {
  const { t } = useTranslation();
  const addApplication = useAddApplication();
  const applications = mockApplications;

  return (
    <>
      <div className="flex items-start justify-between">
        <PageHeader
          title={t("applications.header")}
          description={t("applications.description")}
        />
        {applications && applications?.length !== 0 && (
          <PrimaryButton onClick={addApplication}>
            {t("applications.add_application")}
          </PrimaryButton>
        )}
      </div>

      <Body applications={applications} />
    </>
  );
}
