import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import { ModalTypes } from "@/app/ui-library/types/enums";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function EmptyState() {
  const { t } = useTranslation();

  const router = useRouter();

  const addApplication = () => {
    router.push(
      `${window.location.pathname}?modal=${ModalTypes.AddApplication}`,
      {
        scroll: false,
      }
    );
  };

  return (
    <>
      <div className="text-center [&>*]:mx-auto absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 ">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
