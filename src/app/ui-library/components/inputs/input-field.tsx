import React, { useState } from "react";
import { generateInputClasses } from "../../utils.ts/helper";
import { InputProps } from "../../types/interface";

export default function InputField({
  type = "text",
  disabled = false,
  ref,
  className = "",
  placeholder = "",
  label,
  error,
  value,
  onChange,
  leadingContent,
  trailingContent,
  onBlur,
  required,
  onKeyDown,
  noBorder,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const classes = generateInputClasses({
    value,
    error: error || "",
    focused: isFocused,
    disabled,
    noBorder,
  });
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="text-base">
          {label}{" "}
          {required && (
            <span className="text-red-500 text-lg inline-block">*</span>
          )}
        </label>
      )}
      <div
        className={`
        relative flex items-center mt-1 mb-3  p-2.5 rounded-lg ${classes}
       `}
      >
        {leadingContent && <span className="mr-2">{leadingContent}</span>}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur?.();
          }}
          onKeyDown={onKeyDown}
          className="w-full h-full focus:outline-none bg-neutral-300 dark:bg-black-950"
        />
        {trailingContent && <span className="ml-2">{trailingContent}</span>}
      </div>
    </div>
  );
}
