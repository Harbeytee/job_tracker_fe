import { ReactNode, useState } from "react";
import { IconButton } from "./buttons/icon-button";
import { Icon } from "./icons/icon";

interface CopyToClipboardProps {
  showText?: boolean;
  text: string;
  children?: ReactNode;
}

export default function CopyToClipboard({
  showText,
  text,
  children,
}: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  function copyTextoClipboard(text: string) {
    navigator.clipboard.writeText(text).catch(() => {});
  }

  return (
    <div className="*:ml-1 flex items-center w-fit py-0.5 px-2 rounded-xl font-medium">
      {children || (showText && <p>{text}</p>)}

      {!isCopied ? (
        <IconButton
          color="black-950"
          icon="copy"
          onClick={() => {
            copyTextoClipboard(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
          }}
        />
      ) : (
        <Icon name="check" color="green-600" />
      )}
    </div>
  );
}
