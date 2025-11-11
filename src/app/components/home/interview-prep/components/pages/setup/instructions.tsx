import { useSetupContext } from "../store/setup-context";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/app/ui-library/components/buttons/primary-button";
import { Icon } from "@/app/ui-library/components/icons/icon";
import { GameMode } from "../../../types/types";
import { colorClasses, getModeDetails } from "../../../utils/helpers";
import { ModeDetails } from "../../../types/interfaces";
import { OutlineButton } from "@/app/ui-library/components/buttons/outline-button";
import SessionDetails from "./session-details";

export default function Instructions() {
  const router = useRouter();
  const { role, step, level, mode, setStep } = useSetupContext();

  const modeDetails: ModeDetails | undefined =
    getModeDetails()[mode as GameMode];

  if (!modeDetails) return null;

  const colors = colorClasses[modeDetails.color as keyof typeof colorClasses];

  if (step == 5)
    return (
      <div className="w-[700px] mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colors.bg} mb-4`}
            >
              <Icon name={modeDetails.Icon} size={32} color={colors.accent} />
            </div>
            <h2 className={`text-3xl font-bold ${colors.text} mb-2`}>
              {modeDetails.title}
            </h2>
            <p className="text-gray-600 text-lg">{modeDetails.description}</p>
          </div>

          <div className="space-y-3 mb-8">
            {modeDetails.features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 ${colors.bg} border ${colors.border} rounded-lg transition-all`}
              >
                <Icon name={feature.Icon} size={20} color={colors.accent} />

                <p className="text-gray-700 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>

          <SessionDetails accent={colors.accent} />

          <div className="flex gap-4">
            <OutlineButton
              leadingIcon="chevron-left"
              iconSize={20}
              onClick={() => setStep(step - 1)}
              className="flex-1 !bg-gray-50 text-gray-500"
            >
              Back to Setup
            </OutlineButton>

            <PrimaryButton
              trailingIcon="chevron-right"
              iconSize={20}
              onClick={() => router.push("/interview-prep/quiz")}
              className={`flex-1 ${colors.button} text-white py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 shadow-md`}
            >
              Start Interview
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
}
