import { JobApplication } from "../types/interfaces";
import { getTabs } from "../utils/helpers";
import JobApplicationCard from "./job-application-card";
import ApplicationTabs from "@/app/components/home/applications/components/application-tabs";

export default function JobApplications({
  applications,
}: {
  applications: JobApplication[];
}) {
  return (
    <>
      <ApplicationTabs tabs={getTabs()} count="3" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications?.map((application) => (
          <JobApplicationCard key={application.id} application={application} />
        ))}
      </div>
    </>
  );
}
