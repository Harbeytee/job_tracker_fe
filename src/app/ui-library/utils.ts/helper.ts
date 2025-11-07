import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";
import { useEffect } from "react";

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
  let textColor = "text-gray-500";
  if (disabled) {
    textColor = "text-foreground-disabled";
  } else if (value?.length) {
    textColor = "text-neutral-800";
  }

  if (noBorder)
    return `w-full text-left bg-neutral-300 dark:bg-black-950 outline-none border-none ${textColor} `;

  return `relative flex items-center mt-1 mb-3  p-2.5 rounded-lg w-full border rounded-[8px] text-left px-3  ${textColor} ${
    disabled ? "opacity-50" : "bg-background-system-primary"
  } ${error ? "border-base-danger" : "border-gray-100"} placeholder-gray-500  
    ${focused ? "!border-purple-500 outline-none" : ""}
   `;
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

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
