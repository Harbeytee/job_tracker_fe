import i18n from "@/app/internationalization/config";

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
