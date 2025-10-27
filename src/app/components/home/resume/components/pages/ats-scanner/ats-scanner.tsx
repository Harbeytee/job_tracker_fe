"use client";
import ChooseResume from "../../choose-resumex";
import Result from "./result/result";
import { useTranslation } from "react-i18next";
import useScan from "../../hooks/ats-scanner/useScan";

const ATSScanner: React.FC = () => {
  const { t } = useTranslation();
  const { handleScan, results, setResults, scanning } = useScan();

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto">
        {!results && (
          <>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {t("resume.ats_scanner.header")}
              </h1>
              <p className="text-gray-600">
                {t("resume.ats_scanner.description")}
              </p>
            </div>
            <ChooseResume handleSubmit={handleScan} loading={scanning} />
          </>
        )}

        {results && !scanning && (
          <Result results={results} setResults={setResults} />
        )}
      </div>
    </div>
  );
};

export default ATSScanner;
