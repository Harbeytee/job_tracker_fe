import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import InputField from "@/app/ui-library/components/inputs/input-field";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();

  return (
    <form>
      <InputField
        value=""
        label={t("sign_up.name")}
        placeholder={"John Doe"}
        onChange={() => {}}
        noBorder
        required
      />
      <InputField
        value=""
        label={t("sign_in.email")}
        placeholder={t("email_placeholder")}
        onChange={() => {}}
        noBorder
        required
      />
      <InputField
        value=""
        label={t("sign_in.password")}
        placeholder={"******"}
        onChange={() => {}}
        noBorder
        required
      />
      <PrimaryButton className="margin-x-auto w-full mb-3.5 mt-6">
        {t("sign_up.text")}
      </PrimaryButton>
    </form>
  );
}
