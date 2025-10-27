import { useTranslation } from "react-i18next";
import ChooseResume from "../../choose-resume";

export default function SelectResume() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-primary text-xl text-center md:text-left md:text-3xl font-bold">
        {t("resume.ats_scanner.header")}
      </h2>
      <p className="my-4 max-w-[850px] md:text-lg">
        {t("resume.ats_scanner.description")}
      </p>
      <ChooseResume
        className="lg:max-w-[50%] mx-auto mt-8"
        handleSubmit={(file: string) => {}}
        buttonText={t("resume.ats_scanner.scan_resume")}
        isLoading={false}
      />
    </>
  );
}
