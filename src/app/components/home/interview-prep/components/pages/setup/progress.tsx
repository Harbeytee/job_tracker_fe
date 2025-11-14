import { useSetupContext } from "../store/setup-context";
import ProgressBar from "./progress-bar";
import FlowContainer from "./flow-container";
import SelectRole from "./select-role";
import SelectLevel from "./select-level";
import SelectSkills from "./select-skills/select-skills";
import SelectMode from "./select-mode";

export default function Progress() {
  const { step } = useSetupContext();
  if (step !== 5)
    return (
      <div className="w-full max-w-3xl">
        <ProgressBar />

        <FlowContainer>
          {/* Step 1 */}
          <SelectRole />

          {/* Step 2 */}
          <SelectLevel />

          {/* Step 3 */}
          <SelectSkills />

          {/* Step 4 */}
          <SelectMode />
        </FlowContainer>
      </div>
    );
}
