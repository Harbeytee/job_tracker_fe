import { Icon } from "../icons/icon";
import { IconNames } from "../../types/types";

export default function Text({
  children,
  leadingIcon,
  trailingIcon,
  className,
}: {
  children: React.ReactNode;
  leadingIcon?: IconNames;
  trailingIcon?: IconNames;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-sm text-gray-600 mt-1 ${className}`}
    >
      {leadingIcon && <Icon name={leadingIcon} size={16} color="indigo-600" />}

      {children}
      {trailingIcon && (
        <Icon name={trailingIcon} size={16} color="indigo-600" />
      )}
    </div>
  );
}
