import { useState } from "react";
import { Icon } from "../icons/icon";
import { Tab } from "../../types/interface";

export default function TabSelectGroup({
  tabs,
  handleClick,
  tabContainerClass,
  tabClass,
  type = "list",
  defaultValue,
}: {
  tabs: Tab[];
  handleClick: (val: string) => void;
  tabContainerClass?: string;
  tabClass?: string;
  type?: "list" | "grid";
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue || "");

  const onChange = (val: string) => {
    setValue(val);
    handleClick(val);
  };
  return (
    <div
      className={`${
        type == "list"
          ? "flex flex-col"
          : "grid grid-cols-1 md:grid-cols-2  mb-6"
      } gap-4 ${tabContainerClass}`}
      style={{ maxHeight: "400px" }}
    >
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            onChange(tab.id);
          }}
          className={`flex gap-3 p-5 border rounded-xl cursor-pointer transition-all ${
            value === tab.id
              ? "border-purple-500 bg-purple-500/10"
              : "border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50 hover:border-gray-300"
          } ${tabClass}`}
        >
          {tab.icon && <Icon name={tab.icon} color="gray-400" />}

          <div className="text-left">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate font-semibold">
              {tab.label}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
              {tab.desc}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
