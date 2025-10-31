import React from "react";
import JobApplications from "./job_applications";
import EmptyState from "./empty-state";
import AddApplicationModal from "./add-application-modal";

export default function Body() {
  return (
    <div className="mt-8">
      <EmptyState />
      {/* <JobApplications /> */}
      <AddApplicationModal />
    </div>
  );
}
