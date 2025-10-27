import { IconNames } from "@/app/ui-library/types/types";
import { ResumeStatus } from "./enums";

export interface ResumeCard {
  title: string;
  desc: string;
  iconName: IconNames;
  iconColour: string;
  button: string;
  link: string;
  iconBg: string;
}

export interface Resume {
  id: number;
  name: string;
  uploadDate: string;
  size: string;
}

export interface MatchedKeywords {
  count: number;
  total: number;
  items: string[];
}

export interface MissingKeywords {
  count: number;
  items: string[];
}

export interface KeywordDensity {
  status: string;
  message: string;
}

export interface RoleAlignment {
  score: number;
  message: string;
}

export interface Requirement {
  requirement: string;
  met: boolean;
}

export interface RequirementsMet {
  total: number;
  met: number;
  items: Requirement[];
}

export interface JobMatchSubheaders {
  matchedKeywords: MatchedKeywords;
  missingKeywords: MissingKeywords;
  keywordDensity: KeywordDensity;
  roleAlignment: RoleAlignment;
  requirementsMet: RequirementsMet;
  gapAnalysis: string[];
}

export interface JobMatch {
  score: number;
  status: ResumeStatus;
  subheaders: JobMatchSubheaders;
}

export interface ClearlyDefined {
  count: number;
  items: string[];
}

export interface VagueSkills {
  count: number;
  items: string[];
}

export interface OverstatedClaims {
  count: number;
  items: string[];
}

export interface SkillAccuracySubheaders {
  clearlyDefined: ClearlyDefined;
  vagueSkills: VagueSkills;
  overstatedClaims: OverstatedClaims;
  verificationSuggestions: string[];
  specificityRecommendations: string[];
}

export interface SkillAccuracy {
  score: number;
  status: ResumeStatus;
  subheaders: SkillAccuracySubheaders;
}

export interface QuantifiedAchievements {
  count: number;
  items: string[];
}

export interface ActionResultExamples {
  count: number;
  items: string[];
}

export interface MissingEvidence {
  count: number;
  items: string[];
}

export interface SkillApplicationSubheaders {
  quantifiedAchievements: QuantifiedAchievements;
  actionResultExamples: ActionResultExamples;
  missingEvidence: MissingEvidence;
  improvementOpportunities: string[];
}

export interface SkillApplication {
  score: number;
  status: ResumeStatus;
  subheaders: SkillApplicationSubheaders;
}

export interface FormatCompatibility {
  status: string;
  message: string;
}

export interface ParsingIssues {
  count: number;
  items: string[];
}

export interface SectionRecognition {
  recognized: string[];
  notRecognized: string[];
}

export interface ContactInformation {
  status: string;
  items: string[];
}

export interface ATSReadabilitySubheaders {
  formatCompatibility: FormatCompatibility;
  parsingIssues: ParsingIssues;
  sectionRecognition: SectionRecognition;
  contactInformation: ContactInformation;
  fileFormatRecommendation: string;
  designWarnings: string[];
  optimizationTips: string[];
}

export interface ATSReadability {
  score: number;
  status: ResumeStatus;
  subheaders: ATSReadabilitySubheaders;
}

export interface ScanResults {
  overallScore: number;
  jobMatch?: JobMatch;
  skillAccuracy: SkillAccuracy;
  skillApplication: SkillApplication;
  atsReadability: ATSReadability;
}
