import React from "react";
import JobApplications from "./job_applications";
import EmptyState from "./empty-state";
import AddApplicationModal from "./add-application-modal";
import { JobApplication } from "../types/interfaces";

export default function Body({
  applications,
}: {
  applications: JobApplication[];
}) {
  return (
    <>
      {!applications || applications?.length == 0 ? (
        <EmptyState />
      ) : (
        <JobApplications applications={applications} />
      )}
      <AddApplicationModal />
    </>
  );
}
