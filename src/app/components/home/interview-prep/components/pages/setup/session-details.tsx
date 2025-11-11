import { Icon } from "@/app/ui-library/components/icons/icon";
import { useSetupContext } from "../store/setup-context";
import { useTranslation } from "react-i18next";

export default function SessionDetails({ accent }: { accent: string }) {
  const { t } = useTranslation();
  const { role, level, mode } = useSetupContext();

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg mb-8 border border-gray-100">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Icon name="info" color="gray-700" size={20} />
        {t("interview_prep.setup.session_details")}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-lg">
          <span className="text-gray-500 text-sm block mb-1">Role</span>
          <p className="font-semibold text-gray-900">{role}</p>
        </div>
        <div className="bg-white p-3 rounded-lg">
          <span className="text-gray-500 text-sm block mb-1">
            {t("interview_prep.setup.experience_level")}
          </span>
          <p className="font-semibold text-gray-900 capitalize">{level}</p>
        </div>
        <div className="bg-white p-3 rounded-lg col-span-2">
          <span className="text-gray-500 text-sm block mb-1">
            {" "}
            {t("interview_prep.setup.mode.mode")}
          </span>
          <p className={`font-bold capitalize ${accent} text-lg`}>
            {" "}
            {t(`interview_prep.setup.mode.${mode}.title`)}
          </p>
        </div>
        <div className="bg-white p-3 rounded-lg col-span-2">
          <span className="text-gray-500 text-sm block mb-1">
            {t("interview_prep.setup.total_questions")}
          </span>
          <p className="font-semibold text-gray-900">
            {t("interview_prep.setup.multiple_choice", { questions: 5 })}
          </p>
        </div>
      </div>
    </div>
  );
}
