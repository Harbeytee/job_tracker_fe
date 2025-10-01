import i18n from "@/app/internationalization/config";
import { ResumeCard } from "../types/interfaces";

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
