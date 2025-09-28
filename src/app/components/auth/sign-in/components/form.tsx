import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import InputField from "@/app/ui-library/components/inputs/input-field";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();

  return (
    <form>
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

      <Link href="" className="block text-right -mt-1 text-primary font-bold">
        {t("sign_in.forgot_password")}
      </Link>

      <PrimaryButton className="margin-x-auto w-full my-3.5">
        {t("sign_in.text")}
      </PrimaryButton>
    </form>
  );
}
