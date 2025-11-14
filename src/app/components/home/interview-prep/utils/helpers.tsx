import i18n from "@/app/internationalization/config";
import { GameMode } from "../types/types";
import { ModeDetails } from "../types/interfaces";

export const getModes = () => [
  {
    id: "practice",
    title: i18n.t("interview_prep.setup.mode.practice.title"),
    subtitle: i18n.t("interview_prep.setup.mode.practice.subtitle"),
    description: i18n.t("interview_prep.setup.mode.practice.desc"),
    icon: "book",
    color: "from-blue-500 to-cyan-500",
    accentColor: "bg-blue-500",
  },
  {
    id: "challenge",
    title: i18n.t("interview_prep.setup.mode.challenge.title"),
    subtitle: i18n.t("interview_prep.setup.mode.challenge.subtitle"),
    description: i18n.t("interview_prep.setup.mode.challenge.desc"),
    icon: "clock",
    color: "from-orange-500 to-pink-500",
    accentColor: "bg-orange-500",
  },
  {
    id: "survival",
    title: i18n.t("interview_prep.setup.mode.survival.title"),
    subtitle: i18n.t("interview_prep.setup.mode.survival.subtitle"),
    description: i18n.t("interview_prep.setup.mode.survival.desc"),
    icon: "heart",
    color: "from-red-500 to-rose-500",
    accentColor: "bg-red-500",
  },
];

export const availableSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "System Design",
  "Data Structures",
  "Algorithms",
  "SQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "REST APIs",
  "GraphQL",
  "Testing",
  "CI/CD",
  "Agile",
  "Communication",
  "Leadership",
  "Problem Solving",
  "HTML/CSS",
  "MongoDB",
  "PostgreSQL",
];

export const getLevels = () => [
  {
    id: "entry",
    label: i18n.t("interview_prep.setup.level.entry"),
    desc: i18n.t("interview_prep.setup.level.entry_desc"),
  },
  {
    id: "mid",
    label: i18n.t("interview_prep.setup.level.mid"),
    desc: i18n.t("interview_prep.setup.level.mid_desc"),
  },
  {
    id: "senior",
    label: i18n.t("interview_prep.setup.level.senior"),
    desc: i18n.t("interview_prep.setup.level.senior_desc"),
  },
  {
    id: "lead",
    label: i18n.t("interview_prep.setup.level.lead"),
    desc: i18n.t("interview_prep.setup.level.lead_desc"),
  },
];

export const getModeDetails = (): Record<GameMode, ModeDetails> => ({
  practice: {
    mode: "practice",
    color: "blue",
    Icon: "book",
    title: i18n.t("interview_prep.quiz.practice.title"),
    description: i18n.t("interview_prep.quiz.practice.desc"),
    features: [
      { Icon: "clock", text: i18n.t("interview_prep.quiz.practice.no_limit") },
      {
        Icon: "chevron-left",
        text: i18n.t("interview_prep.quiz.practice.navigate"),
      },
      {
        Icon: "edit",
        text: i18n.t("interview_prep.quiz.practice.change_answers"),
      },
      {
        Icon: "eye",
        text: i18n.t("interview_prep.quiz.practice.view_answers"),
      },
    ],
  },
  challenge: {
    mode: "challenge",
    color: "purple",
    Icon: "zap",
    title: i18n.t("interview_prep.quiz.challenge.title"),
    description: i18n.t("interview_prep.quiz.challenge.desc"),
    features: [
      {
        Icon: "timer",
        text: i18n.t("interview_prep.quiz.challenge.timer"),
      },
      {
        Icon: "chevron-right",
        text: i18n.t("interview_prep.quiz.challenge.cannot_return"),
      },
      {
        Icon: "edit",
        text: i18n.t("interview_prep.quiz.challenge.can_change"),
      },
      {
        Icon: "award",
        text: i18n.t("interview_prep.quiz.challenge.quiz_ends"),
      },
    ],
  },
  survival: {
    mode: "survival",
    color: "orange",
    Icon: "heart",
    title: i18n.t("interview_prep.quiz.survival.title"),
    description: i18n.t("interview_prep.quiz.survival.desc"),
    features: [
      {
        Icon: "heart",
        text: i18n.t("interview_prep.quiz.survival.lives"),
      },
      { Icon: "timer", text: i18n.t("interview_prep.quiz.survival.timed") },
      {
        Icon: "lock",
        text: i18n.t("interview_prep.quiz.survival.final_answer"),
      },
      {
        Icon: "eye",
        text: i18n.t("interview_prep.quiz.survival.correct_answer"),
      },
      { Icon: "close", text: i18n.t("interview_prep.quiz.survival.game_ends") },
    ],
  },
});

export const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-900",
    accent: "blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-900",
    accent: "purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-900",
    accent: "orange-600",
    button: "bg-orange-600 hover:bg-orange-700",
  },
};
