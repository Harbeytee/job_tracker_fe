import React, { ComponentProps } from "react";
import { IconNames } from "../../types/types";
import { Icon } from "../icons/icon";
import Loader from "../Loader";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  leadingIcon?: IconNames;
  trailingIcon?: IconNames;
  iconColor?: string;
  iconSize?: number;
  isLoading?: boolean;
}

export const TextButton = ({
  children,
  onClick,
  className,
  leadingIcon,
  trailingIcon,
  iconColor,
  iconSize = 16,
  isLoading,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={`!p-0 text-[13px]/[15.6px] whitespace-nowrap flex items-center justify-center gap-1 font-semibold text-yala-primary bg-transparent border-none ${className}`}
    onClick={onClick}
    {...props}
  >
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {leadingIcon && (
          <Icon name={leadingIcon} size={iconSize} color={iconColor} />
        )}
        {children}
        {trailingIcon && (
          <Icon name={trailingIcon} size={iconSize} color={iconColor} />
        )}
      </>
    )}
  </button>
);
