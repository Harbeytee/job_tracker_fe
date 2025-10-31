"use client";
import { Icon } from "@/app/ui-library/components/icons/icon";
import { JobApplication } from "../types/interfaces";
import { IconButton } from "@/app/ui-library/components/buttons/icon-button";
import { statusColors } from "../utils/helpers";
import Tag from "@/app/ui-library/components/tag";
import { useTranslation } from "react-i18next";
import Text from "@/app/ui-library/components/texts/text";

export default function JobApplicationCard({
  application,
}: {
  application: JobApplication;
}) {
  const { t } = useTranslation();
  const handleEdit = (application: JobApplication) => {};
  const handleDelete = (id: string) => {};

  return (
    <div
      key={application.id}
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow relative pb-20"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">
            {application.role}
          </h3>
          <p className="text-gray-600 flex items-center gap-2 mt-1">
            <Icon name="building" size={16} color="indigo-600" />

            {application.company}
          </p>
        </div>
        <Tag
          text={application.status}
          className={statusColors[application.status]}
        />
      </div>

      <Text leadingIcon="map-pin">
        {application.location || "Not specified"}
      </Text>
      <Text leadingIcon="briefcase">{application.type}</Text>
      <Text leadingIcon="globe">{application.source}</Text>
      <Text leadingIcon="calendar">
        {t("applications.date_applied", {
          date: `${new Date(application.dateApplied).toLocaleDateString()}`,
        })}{" "}
      </Text>

      {application.notes && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">{application.notes}</p>
        </div>
      )}

      <div className="flex justify-between gap-3 items-center border-t border-gray-200  pt-[7px]  absolute bottom-[4%] w-[85%]">
        {application.resumeUrl && (
          <a
            href={application.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium capitalize"
          >
            <Icon name="link" size={16} color="indigo-600" />
            {t("applications.view_resume")}
          </a>
        )}
        <div className="flex items-center">
          <IconButton
            icon="edit"
            onClick={() => handleEdit(application)}
            color="gray-600"
          />
          <IconButton
            icon="trash"
            onClick={() => handleDelete(application.id)}
            color="red-600"
          />
        </div>
      </div>
    </div>
  );
}
