import { IconNames } from "../../types/types";
import { getColorValue } from "../../utils.ts/helper";
import { icons } from "./assets/icons";

interface IconProps {
  name: IconNames;
  size?: number | string;
  color?: string;
}

export const Icon = ({
  name,
  size = 24,
  color = "currentColor",
}: IconProps) => {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  const colorValue = color === "currentColor" ? color : getColorValue(color);

  const { props } = Icon;

  return (
    <svg
      xmlns={props.xmlns}
      viewBox={props.viewBox}
      width={size}
      height={size}
      fill={props.fill === "none" ? "none" : colorValue}
      stroke={props.fill === "none" ? colorValue : "none"}
    >
      {props.children}
    </svg>
  );
};
