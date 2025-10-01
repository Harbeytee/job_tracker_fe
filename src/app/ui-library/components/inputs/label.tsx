import React from "react";

export default function Label({
  text,
  required,
  className,
}: {
  text: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label
      className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}
    >
      {text}{" "}
      {required && <span className="text-red-500 text-lg inline-block">*</span>}
    </label>
  );
}
