import { Ref } from "react";
import { IconNames } from "./types";

export interface InputProps {
  type?: string;
  ref?: Ref<HTMLInputElement> | null;
  name?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  value: string;
  defaultValue?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  noBorder?: boolean;
}

export interface Tab {
  id: string;
  desc: string;
  label: string;
  icon?: IconNames;
}
