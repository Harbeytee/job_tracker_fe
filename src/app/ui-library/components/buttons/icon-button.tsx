import { ButtonHTMLAttributes } from "react";
import { Icon } from "../icons/icon";
import { IconNames } from "../../types/types";
import Loader from "../Loader";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconNames;
  size?: number;
  color?: string;
  className?: string;
  isLoading?: boolean;
}

export function IconButton({
  icon,
  size = 20,
  color = "black",
  className,
  isLoading,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={`p-2 rounded ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader /> : <Icon name={icon} size={size} color={color} />}
    </button>
  );
}
