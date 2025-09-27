export const generateInputClasses = ({
  value,
  disabled,
  errorText,
  focused,
  noBorder,
}: {
  value: string | string[];
  disabled: boolean;
  errorText: string;
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
    return `w-full text-left bg-transparent outline-none border-none ${textColor} `;

  return `w-full border rounded-[8px] text-left px-3 ${textColor} ${
    disabled
      ? "bg-background-system-disabled cursor-not-allowed"
      : "bg-background-system-primary"
  } ${
    errorText ? "border-base-danger" : "border-grey-300"
  } placeholder-grey-500  
    ${
      focused
        ? "shadow-[0px_0px_0px_2.5px_#9EE35B4D] border-yala-primary outline-none"
        : "shadow-[0px_1px_2px_0px_#0A0D120D]"
    }
    focus:shadow-[0px_0px_0px_2.5px_#9EE35B4D] focus:border-yala-primary focus:outline-none`;
};
