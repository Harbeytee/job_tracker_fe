"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../icons/icon";
import { generateInputClasses, useOutsideClick } from "../../utils.ts/helper";
import { InputProps } from "../../types/interface";
import Label from "./label";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends Omit<InputProps, "onChange"> {
  options: Option[];
  onChange: (value: string) => void;
  searchable?: boolean;
  defaultValue?: string;
  name?: string;
  optionsContainerClassName?: string;
}

export const Select = ({
  disabled = false,
  className = "",
  placeholder = "select option",
  label,
  error,
  options,
  value,
  onChange,
  searchable = false,
  defaultValue,
  name,
  optionsContainerClassName = "",
  required,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultValue || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (value) {
      setSelectedOption(String(value));
    }
  }, [value]);

  const handleSelect = (option: Option) => {
    setSelectedOption(option.value);
    onChange(option.value);
    setIsOpen(false);
    if (searchable) {
      setSearchTerm("");
    }
  };

  useOutsideClick(dropdownRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  const classes = generateInputClasses({
    value,
    error: error || "",
    disabled,
  });

  const filteredOptions = options?.filter((option) =>
    option.label?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`w-full ${className}`} ref={dropdownRef}>
      {label && <Label text={label} required={required} />}
      <div className="relative">
        <button
          name={name}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={`justify-between ${classes}`}
        >
          <div className="flex items-center gap-1">
            {options?.find((o) => o.value === selectedOption)?.label ||
              placeholder}
          </div>
          <Icon name="chevron-down" size={18} color="gray-500" />
        </button>
        {isOpen && (
          <div
            className={`absolute z-10 mt-1 min-w-full bg-white border border-gray-300 rounded-[10px] shadow-lg max-h-60 overflow-auto ${optionsContainerClassName}`}
          >
            {searchable && (
              <div className="p-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={"search"}
                  className="w-full px-3 py-1 border border-gray-300 rounded-md focus:shadow-[0px_0px_0px_2.5px_#9EE35B4D] focus:outline-none"
                  autoFocus
                />
              </div>
            )}
            <ul role="listbox">
              {filteredOptions?.length > 0
                ? filteredOptions?.map((option, idx) => (
                    <div key={option.value}>
                      <li
                        role="option"
                        aria-selected={selectedOption === option.value}
                        onClick={() => handleSelect(option)}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer mb-0"
                      >
                        <p>{option.label}</p>
                      </li>
                      {idx !== filteredOptions?.length - 1 && (
                        <hr className="w-full border-t-[1px] border-gray-200" />
                      )}
                    </div>
                  ))
                : "no results found"}
            </ul>
          </div>
        )}
      </div>
      {error && "error"}
    </div>
  );
};
