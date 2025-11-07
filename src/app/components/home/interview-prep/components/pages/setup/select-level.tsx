import { useContext } from "react";
import { FlowContext } from "./flow-container";
import TabSelectGroup from "@/app/ui-library/components/buttons/tab-select-group";
import { getLevels } from "../../../utils/helpers";

export default function SelectLevel({ step }: { step: number }) {
  const { setLevel, level } = useContext(FlowContext)!;
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
