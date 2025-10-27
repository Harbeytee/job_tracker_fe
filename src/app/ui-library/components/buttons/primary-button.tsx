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
  href?: string;
}

export const PrimaryButton = ({
  children,
  onClick,
  className,
  isLoading,
  leadingIcon,
  trailingIcon,
  href,
  ...props
}: ButtonProps) => (
  <button
    className={`px-4 py-2 text-base whitespace-nowrap flex items-center justify-center !gap-2 font-semibold text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:opacity-90 bg-primary ${className} `}
    onClick={() => (href ? window.open(href, "_blank") : onClick?.())}
    {...props}
  >
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {leadingIcon && <Icon name={leadingIcon} size={16} />}
        {children}
        {trailingIcon && <Icon name={trailingIcon} size={16} />}
      </>
    )}
  </button>
);
