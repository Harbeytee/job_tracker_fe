import i18n from "@/app/internationalization/config";
import { ResumeCard } from "../types/interfaces";
import { ResumeStatus } from "../types/enums";
import { Icon } from "@/app/ui-library/components/icons/icon";

export const getResumeCards = (): ResumeCard[] => [
  {
    title: i18n.t("resume.cards.cover_letter"),
    desc: i18n.t("resume.cards.cover_letter_desc"),
    iconName: "document",
    iconColour: "blue-500",
    button: i18n.t("resume.cards.cover_letter_button"),
    link: "cover-letter-generator",
    iconBg: "bg-blue-500/10",
  },
  {
    title: i18n.t("resume.cards.resume_builder"),
    desc: i18n.t("resume.cards.resume_builder_desc"),
    iconName: "stars",
    iconColour: "orange-600",
    button: i18n.t("resume.cards.resume_builder_button"),
    link: "resume-builder",
    iconBg: "bg-orange-600/10",
  },
  {
    title: i18n.t("resume.cards.ats_scanner"),
    desc: i18n.t("resume.cards.ats_scanner_desc"),
    iconName: "scan",
    iconColour: "green-600",
    button: i18n.t("resume.cards.ats_scanner_button"),
    link: "ats-scanner",
    iconBg: "bg-green-600/10",
  },
];

export const getStatusBg = (status: ResumeStatus): string => {
  switch (status) {
    case ResumeStatus.Good:
      return "bg-green-50 border-green-200";
    case ResumeStatus.Warning:
      return "bg-yellow-50 border-yellow-200";
    case ResumeStatus.Poor:
      return "bg-red-50 border-red-200";
    default:
      return "bg-gray-50 border-gray-200";
  }
};

export const getStatusColor = (status: ResumeStatus) => {
  switch (status) {
    case ResumeStatus.Good:
      return {
        text: "text-green-600",
        color: "green-600",
      };
    case ResumeStatus.Warning:
      return {
        text: "text-yellow-600",
        color: "yellow-600",
      };
    case ResumeStatus.Poor:
      return {
        text: "text-red-600",
        color: "red-600",
      };
    default:
      return {
        text: "text-gray-600",
        color: "gray-600",
      };
  }
};

export const getStatusIcon = (
  status: "good" | "warning" | "poor"
): React.ReactNode | null => {
  switch (status) {
    case "good":
      return <Icon name="check" color="green-600" />;
    case "warning":
      return <Icon name="alert-circle" color="yellow-600" />;
    case "poor":
      return <Icon name="close" color="red-600" />;
    default:
      return null;
  }
};
