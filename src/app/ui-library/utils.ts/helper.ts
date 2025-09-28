import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";

export const generateInputClasses = ({
  value,
  disabled,
  error,
  focused,
  noBorder,
}: {
  value: string | string[];
  disabled: boolean;
  error: string;
  focused?: boolean;
  noBorder?: boolean;
}) => {
  let textColor = "text-grey-500";
  if (disabled) {
    textColor = "text-foreground-disabled";
  } else if (value?.length) {
    textColor = "text-neutral-800";
  }

  if (noBorder)
    return `w-full text-left bg-neutral-300 dark:bg-black-950 outline-none border-none ${textColor} `;

  return `w-full border rounded-[8px] text-left px-3 ${textColor} ${
    disabled
      ? "bg-background-system-disabled cursor-not-allowed"
      : "bg-background-system-primary"
  } ${error ? "border-base-danger" : "border-grey-300"} placeholder-grey-500  
    ${
      focused
        ? "shadow-[0px_0px_0px_2.5px_#9EE35B4D] border-yala-primary outline-none"
        : "shadow-[0px_1px_2px_0px_#0A0D120D]"
    }
    focus:shadow-[0px_0px_0px_2.5px_#9EE35B4D] focus:border-yala-primary focus:outline-none`;
};

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

/**
 * Gets a Tailwind color value from a key like "brand-light" or "gray-500"
 * and returns Hex code (e.g. "#1e40af") or undefined
 */
export const getColorValue = (colorKey: string): string | undefined => {
  const keys = colorKey.split("-");
  let current: unknown = colors;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return typeof current === "string" ? current : undefined;
};

//This function capitalizes the first letter of a string
export const capitalize = (text?: string) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";
