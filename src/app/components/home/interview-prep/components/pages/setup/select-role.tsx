import { useContext } from "react";
import { FlowContext } from "./flow-container";
import InputField from "@/app/ui-library/components/inputs/input-field";
import { useTranslation } from "react-i18next";

export default function SelectRole({ step }: { step: number }) {
  const { role, setRole } = useContext(FlowContext)!;
  const { t } = useTranslation();

  if (step == 1)
    return (
      <InputField
        value={role as string}
        onChange={(e) => setRole?.(e.target.value)}
        placeholder={t("interview_prep.setup.role.placeholder")}
        className="!px-4 !py-4 rounded-xl  bg-gray-50 dark:bg-slate-900"
      />
    );
}
