import { colorClasses } from "@/app/components/home/applications/utils/helpers";
import { useState } from "react";
import { JobStatus } from "../types/enums";

interface Tab {
  label: string;
  value: JobStatus;
  color: string;
}

export default function ApplicationTabs({
  tabs,
  count,
}: {
  tabs: Tab[];
  count: string;
}) {
  const [activeTab, setActiveTab] = useState(JobStatus.Applied);

  return (
    <div className="flex flex-wrap border-b border-gray-200  mb-7">
      {tabs.map((tab) => {
        const isActive = tab.value === activeTab;
        const colors = colorClasses[tab.color as keyof typeof colorClasses];

        const inactiveClasses = `
          ${colors.inactive}
          border-b-2 border-transparent 
          text-base font-medium px-4 pt-3 pb-3 
          transition duration-200 ease-in-out cursor-pointer
          flex items-center space-x-2
        `;

        const activeClasses = `
          ${colors.active}
          border-b-[4px]
          text-base font-bold px-4 pt-3 pb-3 
          cursor-pointer 
          -mb-px shadow-sm 
          flex items-center space-x-2
        `;

        return (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={isActive ? activeClasses : inactiveClasses}
          >
            {isActive ? (
              <>
                <span className="capitalize">{tab.label}</span>
                <span
                  className={`inline-flex items-center justify-center h-6 min-w-6 rounded-full text-xs font-bold px-2 ${colors.pill}`}
                >
                  {count}
                </span>
              </>
            ) : (
              <>
                <span
                  className={`w-2 h-2 rounded-full ${colors.dot}`}
                  aria-hidden="true"
                ></span>
                <span className="capitalize">{tab.label}</span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}
