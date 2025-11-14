import TabSelectGroup from "@/app/ui-library/components/buttons/tab-select-group";
import { getLevels } from "../../../utils/helpers";
import { useSetupContext } from "../store/setup-context";

export default function SelectLevel() {
  const { setLevel, level, step } = useSetupContext();
  const levels = getLevels();

  if (step == 2)
    return (
      <TabSelectGroup
        defaultValue={level}
        type="grid"
        tabs={levels}
        handleClick={setLevel}
      />
    );
}
