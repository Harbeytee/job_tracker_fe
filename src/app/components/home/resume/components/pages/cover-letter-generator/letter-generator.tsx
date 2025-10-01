import { useState } from "react";
import ChooseResume from "./choose-resume";
import CoverLetterPreview from "./cover-letter-preview";

export default function LetterGenerator() {
  const [coverLetter, setCoverLetter] = useState("");

  return (
    <div className="grid lg:grid-cols-2 gap-6 ">
      <ChooseResume setCoverLetter={setCoverLetter} />
      <CoverLetterPreview
        coverLetter={coverLetter}
        setCoverLetter={setCoverLetter}
      />
    </div>
  );
}
