import { useTranslation } from "react-i18next";

export default function ProgressBar({ step }: { step: number }) {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {[1, 2, 3, 4].map((number) => (
          <div
            key={number}
            className={
              number < 4 ? "flex items-center justify-between flex-1" : ""
            }
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                number === step
                  ? "bg-purple-500 text-white scale-110"
                  : number < step
                  ? "bg-green-500 text-white"
                  : "bg-white shadow-custom-gray dark:border-none dark:bg-slate-700 text-slate-400"
              }`}
            >
              {number < step ? "✓" : number}
            </div>
            {number < 4 && (
              <div
                className={`flex-1 h-1 mx-2 rounded transition-all w-full ${
                  number < step
                    ? "bg-green-500"
                    : "bg-gray-300 dark:bg-slate-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-sm text-slate-400 mt-2">
        <span>{t("interview_prep.setup.role.role")}</span>
        <span>{t("interview_prep.setup.level.level")}</span>
        <span>{t("interview_prep.setup.skills.skills")}</span>
        <span>{t("interview_prep.setup.mode.mode")}</span>
      </div>
    </div>
  );
}
