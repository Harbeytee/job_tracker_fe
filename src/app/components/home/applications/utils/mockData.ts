import { JobStatus, JobType } from "../types/enums";
import { JobApplication } from "../types/interfaces";

export const mockApplications: JobApplication[] = [
  {
    id: "1",
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    status: JobStatus.Interview,
    source: "LinkedIn",
    notes: "Second round interview scheduled for next week",
    type: JobType.FullTime,
    location: "San Francisco, CA",
    resumeUrl: "https://example.com/resume.pdf",
    dateApplied: "2024-10-20",
  },
  {
    id: "2",
    role: "Product Designer",
    company: "Design Studio",
    status: JobStatus.Applied,
    source: "Company Website",
    notes: "Portfolio submitted",
    type: JobType.Contract,
    location: "Remote",
    resumeUrl: "https://example.com/resume2.pdf",
    dateApplied: "2024-10-22",
  },
];
