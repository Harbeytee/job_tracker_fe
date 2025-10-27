import { ResumeStatus } from "../types/enums";
import { ScanResults } from "../types/interfaces";

export const existingResumes = [
  {
    id: "1",
    name: "Software Engineer Resume.pdf",
    date: "Updated 2 days ago",
  },
  { id: "2", name: "Product Manager Resume.pdf", date: "Updated 1 week ago" },
  { id: "3", name: "Marketing Resume.pdf", date: "Updated 2 weeks ago" },
];

export const atsResults: ScanResults = {
  overallScore: 77,
  skillAccuracy: {
    score: 72,
    status: ResumeStatus.Warning,
    subheaders: {
      clearlyDefined: {
        count: 8,
        items: [
          "React",
          "JavaScript",
          "Project Management",
          "Team Leadership",
          "SQL",
          "Python",
          "Agile",
          "Git",
        ],
      },
      vagueSkills: {
        count: 3,
        items: [
          "Marketing experience",
          "Good communication",
          "Problem solving",
        ],
      },
      overstatedClaims: {
        count: 1,
        items: ["Expert in all programming languages"],
      },
      verificationSuggestions: [
        "Add certifications for technical skills",
        "Include specific tools/frameworks used",
        "Mention version numbers for technologies",
      ],
      specificityRecommendations: [
        'Change "Marketing experience" to "Digital Marketing: SEO, SEM, Social Media Strategy"',
        'Replace "Good communication" with specific examples of presentations or documentation',
      ],
    },
  },
  skillApplication: {
    score: 68,
    status: ResumeStatus.Warning,
    subheaders: {
      quantifiedAchievements: {
        count: 5,
        items: [
          "Increased sales by 35% in Q3 2024",
          "Reduced bug count by 40%",
          "Managed team of 12 developers",
          "Delivered 8 projects on time",
          "Improved page load speed by 60%",
        ],
      },
      actionResultExamples: {
        count: 4,
        items: [
          "Led migration resulting in 99.9% uptime",
          "Implemented CI/CD reducing deployment time by 50%",
          "Conducted code reviews improving code quality",
          "Mentored 5 junior developers",
        ],
      },
      missingEvidence: {
        count: 6,
        items: [
          "Team collaboration",
          "Stakeholder management",
          "Budget planning",
          "Risk assessment",
          "Quality assurance",
          "Process improvement",
        ],
      },
      improvementOpportunities: [
        "Add metrics to project management claims",
        "Quantify team collaboration results",
        "Show financial impact of budget planning",
        "Include success rates for risk mitigation",
      ],
    },
  },
  atsReadability: {
    score: 92,
    status: ResumeStatus.Good,
    subheaders: {
      formatCompatibility: {
        status: "Excellent",
        message: "Clean, parseable format with standard sections",
      },
      parsingIssues: {
        count: 0,
        items: [],
      },
      sectionRecognition: {
        recognized: [
          "Contact Information",
          "Work Experience",
          "Education",
          "Skills",
        ],
        notRecognized: [],
      },
      contactInformation: {
        status: "Complete",
        items: ["Email", "Phone", "LinkedIn", "Location"],
      },
      fileFormatRecommendation:
        "Current format (PDF) is optimal for ATS systems",
      designWarnings: [
        "Consider removing header image for better compatibility",
        "Text in columns may not parse in correct order",
      ],
      optimizationTips: [
        "Use standard fonts (Arial, Calibri, Times New Roman)",
        "Keep formatting simple with clear section headers",
        "Avoid text boxes and embedded graphics",
      ],
    },
  },
};
