import { FlowContext } from "./flow-container";
import { useContext } from "react";
import { Icon } from "@/app/ui-library/components/icons/icon";
import { IconNames } from "@/app/ui-library/types/types";
import { getModes } from "../../../utils/helpers";

export default function SelectMode({ step }: { step: number }) {
  const { mode, setMode } = useContext(FlowContext)!;
  const modes = getModes();

  if (step == 4)
    return (
      <div className="space-y-4 mb-6">
        {modes.map((item) => {
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => setMode?.(item.id)}
              className={`w-full p-5 rounded-2xl border-2 text-left focus:outline-none ${
                mode === item.id
                  ? "border-purple-500 bg-purple-100 dark:bg-slate-800"
                  : "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900/50 hover:border-slate-400 dark:hover:border-slate-700/80"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0 shadow-xl`}
                >
                  <Icon name={item.icon as IconNames} size={20} color="white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>

                    <span className="text-sm text-purple-700 dark:text-purple-300 opacity-90 font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Checkmark Indicator */}
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                      mode === item.id
                        ? "border-purple-500 bg-purple-600"
                        : "border-slate-400 dark:border-slate-600"
                    }`}
                  >
                    {mode === item.id && <Icon name="check" color="white" />}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
}
