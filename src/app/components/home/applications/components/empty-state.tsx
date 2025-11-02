import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import { useTranslation } from "react-i18next";
import { useAddApplication } from "../hooks/useAddApplications";
import { Empty } from "@/app/ui-library/components/icons/empty";

export default function EmptyState() {
  const { t } = useTranslation();
  const addApplication = useAddApplication();

  return (
    <>
      <div className="text-center [&>*]:mx-auto absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 ">
        <Empty />
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
          {t("applications.empty_state_header")}
        </h3>
        <p className="max-w-[450px]">{t("applications.empty_state_desc")}</p>
        <PrimaryButton onClick={addApplication} className="mt-6">
          {t("applications.empty_state_button")}
        </PrimaryButton>
      </div>
    </>
  );
}
