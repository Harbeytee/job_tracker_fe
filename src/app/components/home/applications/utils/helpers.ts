import i18n from "@/app/internationalization/config";

export const statusColors = {
  applied: "bg-blue-100 text-blue-800 border-blue-200",
  interview: "bg-purple-100 text-purple-800 border-purple-200",
  accepted: "bg-green-100 text-green-800 border-green-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
  ghosted: "bg-gray-100 text-gray-800 border-gray-200",
};

// Map colors to complete Tailwind classes
export const colorClasses = {
  blue: {
    inactive: "text-gray-500 hover:text-blue-600",
    active: "text-blue-700 border-blue-600",
    pill: "bg-blue-600 text-white",
    dot: "bg-blue-500",
  },
  purple: {
    inactive: "text-gray-500 hover:text-purple-600",
    active: "text-purple-700 border-purple-600",
    pill: "bg-purple-600 text-white",
    dot: "bg-purple-500",
  },
  green: {
    inactive: "text-gray-500 hover:text-green-600",
    active: "text-green-700 border-green-600",
    pill: "bg-green-600 text-white",
    dot: "bg-green-500",
  },
  red: {
    inactive: "text-gray-500 hover:text-red-600",
    active: "text-red-700 border-red-600",
    pill: "bg-red-600 text-white",
    dot: "bg-red-500",
  },
  gray: {
    inactive: "text-gray-500 hover:text-gray-600",
    active: "text-gray-700 border-gray-600",
    pill: "bg-gray-600 text-white",
    dot: "bg-gray-500",
  },
};

export const getTabs = () => [
  { label: i18n.t("applications.all"), value: "all", color: "gray" },
  { label: i18n.t("applications.applied"), value: "applied", color: "blue" },
  {
    label: i18n.t("applications.interview"),
    value: "interview",
    color: "purple",
  },
  { label: i18n.t("applications.accepted"), value: "accepted", color: "green" },
  { label: i18n.t("applications.rejected"), value: "rejected", color: "red" },
  { label: i18n.t("applications.ghosted"), value: "ghosted", color: "gray" },
];
