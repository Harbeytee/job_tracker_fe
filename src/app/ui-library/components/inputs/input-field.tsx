import React, { useState } from "react";
import { generateInputClasses } from "../../utils.ts/helper";
import { InputProps } from "../../types/interface";
import Label from "./label";

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
    <div className={`w-full relative`}>
      {label && <Label text={label} required={required} />}
      <div
        className={`
        ${classes} ${className}
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
          className="w-full h-full bg-transparent placeholder-slate-500  focus:outline-none dark:bg-black-950"
        />
        {trailingContent && <span className="ml-2">{trailingContent}</span>}
      </div>
    </div>
  );
}
