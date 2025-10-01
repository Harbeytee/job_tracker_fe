import { Dispatch, SetStateAction, useState } from "react";

export default function useGenerate(
  setCoverLetter: Dispatch<SetStateAction<string>>
) {
  const [selectedResume, setSelectedResume] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setCoverLetter(`Dear Hiring Manager,

I am writing to express my strong interest in the [Position Title] role at [Company Name]. With my background in [Your Field] and proven track record of [Key Achievement], I am confident in my ability to contribute effectively to your team.

In my current role at [Current Company], I have successfully [Achievement 1], which resulted in [Specific Result]. Additionally, I have demonstrated expertise in [Skill 1], [Skill 2], and [Skill 3], all of which align closely with the requirements outlined in your job posting.

What particularly excites me about this opportunity at [Company Name] is [Specific Aspect of Company/Role]. I am impressed by [Company Achievement/Value], and I am eager to bring my skills and passion to contribute to your continued success.

I would welcome the opportunity to discuss how my experience and qualifications align with your needs. Thank you for considering my application. I look forward to the possibility of contributing to your team.

Sincerely,
[Your Name]`);
      setIsGenerating(false);
    }, 2000);
  };

  const setFile = (file: string | null) => {
    setUploadedFile(file);
    setSelectedResume("");
  };

  const setResume = (resume: string) => {
    setSelectedResume(resume);
    setUploadedFile(null);
  };
  return {
    setResume,
    setFile,
    handleGenerate,
    isGenerating,
    selectedResume,
    uploadedFile,
  };
}
