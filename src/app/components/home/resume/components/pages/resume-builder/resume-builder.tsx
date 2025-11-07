"use client";

import { Icon } from "@/app/ui-library/components/icons/icon";
import React, { useState } from "react";

interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

// Modern Template Component
const ModernTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div
      id="resume-preview"
      className="bg-white w-full max-w-[210mm] mx-auto shadow-2xl"
      style={{ minHeight: "297mm" }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
        <h1 className="text-4xl font-bold mb-2">{data.name || "Your Name"}</h1>
        <p className="text-xl mb-4 opacity-90">{data.title || "Your Title"}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          {data.email && <span>📧 {data.email}</span>}
          {data.phone && <span>📱 {data.phone}</span>}
          {data.location && <span>📍 {data.location}</span>}
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {data.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {exp.position}
                    </h3>
                    <p className="text-indigo-600 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-600 text-sm">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {edu.degree}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-indigo-600 font-semibold">{edu.school}</p>
                  <span className="text-gray-600 text-sm">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Classic Template Component
const ClassicTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div
      id="resume-preview"
      className="bg-white w-full max-w-[210mm] mx-auto shadow-2xl"
      style={{ minHeight: "297mm" }}
    >
      <div className="p-8">
        {/* Header */}
        <div className="text-center border-b-4 border-gray-800 pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {data.name || "Your Name"}
          </h1>
          <p className="text-xl text-gray-700 mb-3">
            {data.title || "Your Title"}
          </p>
          <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600">
            {data.email && <span>{data.email}</span>}
            {data.phone && <span>•</span>}
            {data.phone && <span>{data.phone}</span>}
            {data.location && <span>•</span>}
            {data.location && <span>{data.location}</span>}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {exp.position}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                </div>
                <p className="text-gray-700 font-semibold mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700">{edu.school}</p>
                  </div>
                  <span className="text-gray-600 text-sm">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <span key={index} className="text-gray-700">
                  {skill}
                  {index < data.skills.length - 1 ? " •" : ""}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Resume Builder Component
const ResumeBuilder: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState<"modern" | "classic">(
    "modern"
  );
  const [showPreview, setShowPreview] = useState(true);
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "John Doe",
    title: "Senior Software Engineer",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    summary:
      "Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about building scalable applications and mentoring junior developers.",
    experience: [
      {
        position: "Senior Software Engineer",
        company: "Tech Corp",
        startDate: "Jan 2021",
        endDate: "Present",
        description:
          "Led development of microservices architecture serving 10M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California",
        year: "2018",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"],
  });

  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
  };

  const TemplateComponent = templates[activeTemplate];

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((_, i) => i !== index),
    });
  };

  const updateExperience = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const updated = [...resumeData.experience];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, experience: updated });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { degree: "", school: "", year: "" },
      ],
    });
  };

  const removeEducation = (index: number) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index),
    });
  };

  const updateEducation = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    const updated = [...resumeData.education];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, education: updated });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, ""],
    });
  };

  const removeSkill = (index: number) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  const updateSkill = (index: number, value: string) => {
    const updated = [...resumeData.skills];
    updated[index] = value;
    setResumeData({ ...resumeData, skills: updated });
  };

  const downloadPDF = () => {
    // In a real app, this would send HTML to your backend
    // For now, we'll simulate it with browser print
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <Icon name="eye" />
              {/* <Eye className="w-4 h-4" /> */}
              {showPreview ? "Hide" : "Show"} Preview
            </button>
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Icon name="download" />
              {/* <Download className="w-4 h-4" /> */}
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Editor Panel */}
          <div className="w-1/2 space-y-6">
            {/* Template Selector */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Choose Template</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTemplate("modern")}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold ${
                    activeTemplate === "modern"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Modern
                </button>
                <button
                  onClick={() => setActiveTemplate("classic")}
                  className={`flex-1 px-4 py-3 rounded-lg font-semibold ${
                    activeTemplate === "classic"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Classic
                </button>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Personal Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={resumeData.name}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Professional Title"
                  value={resumeData.title}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={resumeData.email}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={resumeData.phone}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={resumeData.location}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, location: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <textarea
                  placeholder="Professional Summary"
                  value={resumeData.summary}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, summary: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Icon name="briefcase" />
                  {/* <Briefcase className="w-5 h-5" /> */}
                  Experience
                </h2>
                <button
                  onClick={addExperience}
                  className="flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                >
                  +{/* <Plus className="w-4 h-4" /> */}
                  Add
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-semibold text-gray-600">
                        Experience {index + 1}
                      </span>
                      <button
                        onClick={() => removeExperience(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Icon name="trash" />
                        {/* <Trash2 className="w-4 h-4" /> */}
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Position"
                      value={exp.position}
                      onChange={(e) =>
                        updateExperience(index, "position", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) =>
                        updateExperience(index, "company", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Start Date"
                        value={exp.startDate}
                        onChange={(e) =>
                          updateExperience(index, "startDate", e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="End Date"
                        value={exp.endDate}
                        onChange={(e) =>
                          updateExperience(index, "endDate", e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <textarea
                      placeholder="Description"
                      value={exp.description}
                      onChange={(e) =>
                        updateExperience(index, "description", e.target.value)
                      }
                      rows={3}
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  {/* <GraduationCap className="w-5 h-5" /> */}
                  Education
                </h2>
                <button
                  onClick={addEducation}
                  className="flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                >
                  +{/* <Plus className="w-4 h-4" /> */}
                  Add
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-semibold text-gray-600">
                        Education {index + 1}
                      </span>
                      <button
                        onClick={() => removeEducation(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Icon name="trash" />
                        {/* <Trash2 className="w-4 h-4" /> */}
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="School"
                      value={edu.school}
                      onChange={(e) =>
                        updateEducation(index, "school", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      value={edu.year}
                      onChange={(e) =>
                        updateEducation(index, "year", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  {/* <Award className="w-5 h-5" /> */}
                  <Icon name="award" />
                  Skills
                </h2>
                <button
                  onClick={addSkill}
                  className="flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                >
                  +{/* <Plus className="w-4 h-4" /> */}
                  Add
                </button>
              </div>
              <div className="space-y-2">
                {resumeData.skills.map((skill, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Skill"
                      value={skill}
                      onChange={(e) => updateSkill(index, e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <button
                      onClick={() => removeSkill(index)}
                      className="px-3 py-2 text-red-500 hover:text-red-700"
                    >
                      <Icon name="trash" />
                      {/* <Trash2 className="w-4 h-4" /> */}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className="w-1/2 sticky top-24 h-fit">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg font-bold mb-4 text-center">
                  Live Preview
                </h2>
                <div
                  className="bg-white rounded-lg overflow-hidden"
                  style={{
                    transform: "scale(0.7)",
                    transformOrigin: "top center",
                  }}
                >
                  <TemplateComponent data={resumeData} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-preview, #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeBuilder;
