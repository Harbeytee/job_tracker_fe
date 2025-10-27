import { useState } from "react";
import { ResumeStatus } from "../../../types/enums";
import { getStatusColor, getStatusIcon } from "../../../utils/helpers";
import { Icon } from "@/app/ui-library/components/icons/icon";
import { IconNames } from "@/app/ui-library/types/types";
import ScoreCircle from "./score-circle";

export default function SectionCollapsible({
  status,
  icon,
  score,
  title,
  description,
  children,
}: {
  status: ResumeStatus;
  icon: IconNames;
  score: number;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const [openCollapsible, setOpenCollapsible] = useState(true);

  return (
    <div>
      <div className={`bg-white rounded-xl shadow-custom-gray`}>
        <div
          className="p-6 cursor-pointer"
          onClick={() => setOpenCollapsible((prev) => !prev)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <Icon
                size={24}
                name={icon}
                color={getStatusColor(status).color}
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ScoreCircle score={score} size="small" />

              {getStatusIcon(status)}

              {openCollapsible ? (
                <Icon size={20} name="chevron-up" />
              ) : (
                <Icon name="chevron-down" />
              )}
            </div>
          </div>
        </div>
        {openCollapsible && children}
      </div>
    </div>
  );
}
