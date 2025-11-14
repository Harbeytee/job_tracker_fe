import React, { ComponentProps } from "react";
import { IconNames } from "../../types/types";
import { Icon } from "../icons/icon";
import Loader from "../Loader";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  leadingIcon?: IconNames;
  trailingIcon?: IconNames;
  iconSize?: number;
}

export const OutlineButton = ({
  children,
  onClick,
  className,
  isLoading,
  leadingIcon,
  trailingIcon,
  iconSize = 16,
  ...props
}: ButtonProps) => (
  <button
    className={`px-4 py-2 text-base flex items-center justify-center !gap-2 text-[13px]/[16.9px] font-semibold bg-transparent border border-gray-100 rounded-lg ${className}`}
    onClick={onClick}
    {...props}
  >
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {leadingIcon && <Icon name={leadingIcon} size={iconSize} />}
        {children}
        {trailingIcon && <Icon name={trailingIcon} size={iconSize} />}
      </>
    )}
  </button>
);
