import { JobStatus, JobType } from "./enums";

export interface JobApplication {
  id: string;
  role: string;
  company: string;
  status: JobStatus;
  source: string;
  notes: string;
  type: JobType;
  location: string;
  resumeUrl: string;
  dateApplied: string;
}
