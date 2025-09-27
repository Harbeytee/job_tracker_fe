import React, { Ref, useState } from "react";
import { generateInputClasses } from "../utils.ts/helper";

export interface InputProps {
  type?: string;
  ref?: Ref<HTMLInputElement> | null;
  name?: string;
  disabled?: boolean;
  className?: string;
  placeholderText?: string;
  labelText?: string;
  errorText?: string;
  value: string;
  defaultValue?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function input({
  type = "text",
  disabled = false,
  ref,
  className = "",
  placeholderText = "",
  labelText,
  errorText,
  value,
  onChange,
  leadingContent,
  trailingContent,
  onBlur,
  required,
  onKeyDown,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const classes = generateInputClasses({
    value,
    errorText: errorText || "",
    focused: isFocused,
    disabled,
  });
  return (
    <div className={`w-full ${className}`}>
      {labelText && <label>{labelText}</label>}
      <div
        className={`
        relative flex items-center ${classes}
       `}
      >
        {leadingContent && <span className="mr-2">{leadingContent}</span>}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur?.();
          }}
          onKeyDown={onKeyDown}
          className="w-full h-full focus:outline-none"
        />
        {trailingContent && <span className="ml-2">{trailingContent}</span>}
      </div>
    </div>
  );
}
