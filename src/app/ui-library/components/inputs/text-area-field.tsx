import React, { Ref } from "react";
import Label from "./label";
import { InputProps } from "../../types/interface";

interface TextAreaFieldProps
  extends Omit<InputProps, "type" | "onChange" | "ref" | "onKeyDown"> {
  rows?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  ref?: Ref<HTMLTextAreaElement>;
  noBorder?: boolean;
}

export const TextAreaField = ({
  label,
  disabled = false,
  className = "",
  placeholder = "",
  error,
  value,
  onChange,
  rows = 4,
  resize = "vertical",
  maxLength,
  noBorder = false,
  ...props
}: TextAreaFieldProps) => {
  const baseClasses =
    "w-full rounded-[8px] text-left p-4 placeholder-grey-500 shadow-[0px_1px_2px_0px_#0A0D120D]  focus:outline-none text-sm";

  const stateClasses = disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white";
  const errorClasses = error ? "border-base-danger" : "border-grey-100";
  const resizeClass = `resize-${resize}`;
  const borderClass = noBorder
    ? "border-none"
    : "border border-grey-300 focus:border-primary";
  return (
    <div className={`w-full ${className}`}>
      {label && <Label text={label} />}

      <textarea
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        className={`
          ${baseClasses}
          ${stateClasses}
          ${errorClasses}
          ${resizeClass}
          ${borderClass}
          ${className}
        `}
        {...props}
      />
    </div>
  );
};
