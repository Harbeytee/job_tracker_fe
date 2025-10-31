import { OutlineButton } from "@/app/ui-library/components/buttons/outline-button";
import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import InputField from "@/app/ui-library/components/inputs/input-field";
import { Select } from "@/app/ui-library/components/inputs/select";
import { TextAreaField } from "@/app/ui-library/components/inputs/text-area-field";
import { Modal } from "@/app/ui-library/components/modal";
import Text from "@/app/ui-library/components/texts/text";
import { ModalTypes } from "@/app/ui-library/types/enums";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function AddApplicationModal() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("modal") === ModalTypes.AddApplication;

  const onClose = () => {
    router.push(window.location.pathname, { scroll: false });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="font-semibold">{t("applications.form.title")}</h2>
      <Text className="mt-0 max-w-[500px]">
        {t("applications.form.description")}
      </Text>

      <form className="mt-4">
        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
          <InputField
            value=""
            label={t("applications.form.job_role")}
            placeholder={t("applications.form.job_role_placeholder")}
            onChange={() => {}}
            required
          />
          <InputField
            value=""
            label={t("applications.form.company")}
            placeholder="Google"
            onChange={() => {}}
            required
          />
          <Select
            label={t("applications.form.status")}
            onChange={() => {}}
            options={[]}
            value=""
          />
          <Select
            label={t("applications.form.job_type")}
            onChange={() => {}}
            options={[]}
            value=""
          />
          <InputField
            value=""
            label={t("applications.form.source")}
            placeholder={t("applications.form.source_placeholder")}
            onChange={() => {}}
          />
          <InputField
            value=""
            label={t("applications.form.location")}
            placeholder={"Paris, France"}
            onChange={() => {}}
          />
        </div>

        <InputField
          value=""
          label={t("applications.form.resume_url")}
          placeholder="https://..."
          onChange={() => {}}
        />

        <TextAreaField
          label={t("applications.form.notes")}
          placeholder={t("applications.form.notes_placeholder")}
          value=""
          onChange={() => ""}
        />

        <div className="flex mt-6 flex items-center justify-end gap-3">
          <OutlineButton type="button" onClick={onClose}>
            {t("cancel")}
          </OutlineButton>
          <PrimaryButton>{t("applications.add_application")}</PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}
