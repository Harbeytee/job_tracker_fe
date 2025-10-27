"use client";
import React, { useState } from "react";
import ChooseResume from "../../choose-resumex";
import { ScanResults } from "../../../types/interfaces";
import { atsResults } from "../../../utils/mockData";
import Result from "./result/result";
import { ResumeStatus } from "../../../types/enums";
import { useTranslation } from "react-i18next";

const ATSScanner: React.FC = () => {
  const [scanning, setScanning] = useState<boolean>(false);
  const [results, setResults] = useState<ScanResults | null>(null);

  const handleScan = (payload: {
    jobDescription?: string;
    file: string | null;
  }) => {
    setScanning(true);
    setTimeout(() => {
      atsResults.jobMatch = {
        score: 85,
        status: ResumeStatus.Good,
        subheaders: {
          matchedKeywords: {
            count: 12,
            total: 15,
            items: [
              "React",
              "JavaScript",
              "Team Leadership",
              "Agile",
              "Git",
              "CI/CD",
              "SQL",
              "Project Management",
              "Code Review",
              "Mentoring",
              "Problem Solving",
              "Communication",
            ],
          },
          missingKeywords: {
            count: 3,
            items: ["Python", "AWS", "Docker"],
          },
          keywordDensity: {
            status: "Good",
            message: "Key terms appear 2-4 times throughout resume",
          },
          roleAlignment: {
            score: 88,
            message: "Strong alignment with Senior Developer role requirements",
          },
          requirementsMet: {
            total: 10,
            met: 8,
            items: [
              { requirement: "5+ years experience", met: true },
              { requirement: "Team leadership", met: true },
              { requirement: "React expertise", met: true },
              { requirement: "Cloud experience (AWS)", met: false },
              { requirement: "Agile methodology", met: true },
              { requirement: "CI/CD pipelines", met: true },
              { requirement: "Database management", met: true },
              { requirement: "Container orchestration", met: false },
              { requirement: "Code review experience", met: true },
              { requirement: "Mentoring juniors", met: true },
            ],
          },
          gapAnalysis: [
            "Add AWS/cloud platform experience or certifications",
            "Include Docker/Kubernetes projects",
            "Mention Python if you have experience with it",
          ],
        },
      };
      atsResults.overallScore = 79;

      setResults(atsResults);
      setScanning(false);
    }, 2500);
  };

  const { t } = useTranslation();

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
