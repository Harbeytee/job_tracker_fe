"use client";
import { useState } from "react";
import ProgressBar from "./progress-bar";
import SelectMode from "./select-mode";
import SelectLevel from "./select-level";
import SelectRole from "./select-role";
import FlowContainer from "./flow-container";
import SelectSkills from "./select-skills/select-skills";

const Setup = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex mt-[20px] justify-center p-4">
      <div className="w-full max-w-3xl">
        <ProgressBar step={step} />

        <FlowContainer step={step} setStep={setStep}>
          {/* Step 1 */}
          <SelectRole step={step} />

          {/* Step 2 */}
          <SelectLevel step={step} />

          {/* Step 3 */}
          <SelectSkills step={step} />

          {/* Step 4 */}
          <SelectMode step={step} />
        </FlowContainer>
      </div>
    </div>
  );
};

export default Setup;
