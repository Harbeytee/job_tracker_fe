import React, { ComponentProps } from "react";
import { IconNames } from "../../types/types";
import { Icon } from "../icons/icon";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  leadingIcon?: IconNames;
  trailingIcon?: IconNames;
}

export const OutlineButton = ({
  children,
  onClick,
  className,
  isLoading,
  leadingIcon,
  trailingIcon,
  ...props
}: ButtonProps) => (
  <button
    className={`px-4 py-2 text-base flex items-center justify-center !gap-2 text-[13px]/[16.9px] font-semibold text-yala-black bg-transparent border border-grey-300 rounded-lg ${className}`}
    onClick={onClick}
    {...props}
  >
    {isLoading ? (
      "Loading..."
    ) : (
      <>
        {leadingIcon && <Icon name={leadingIcon} size={16} />}
        {children}
        {trailingIcon && <Icon name={trailingIcon} size={16} />}
      </>
    )}
  </button>
);
