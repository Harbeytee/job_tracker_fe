import i18n from "../internationalization/config";
import { NavLink } from "./types/interfaces";

export const getNavLinks = (): NavLink[] => [
  { name: i18n.t("navbar.dashboard"), icon: "home", route: "/dashboard" },
  { name: i18n.t("navbar.job_search"), icon: "suitcase", route: "" },
  { name: i18n.t("navbar.saved_jobs"), icon: "bookmark", route: "" },
  { name: i18n.t("navbar.planner"), icon: "calendar", route: "" },
  {
    name: i18n.t("navbar.applications"),
    icon: "applications",
    route: "/applications",
  },
  { name: i18n.t("navbar.resume"), icon: "list", route: "/resume" },
  {
    name: i18n.t("navbar.interview_prep"),
    icon: "enter",
    route: "/interview-prep",
  },
  { name: i18n.t("navbar.job_boards"), icon: "linkedin", route: "" },
];
