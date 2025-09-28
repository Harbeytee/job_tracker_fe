import { OutlineButton } from "@/app/ui-library/components/buttons/outline-button";
import { Icon } from "@/app/ui-library/components/icons/icon";

export default function GoogleAuth() {
  return (
    <OutlineButton className="margin-x-auto w-full mt-6 mb-12">
      <Icon name="google" /> Google
    </OutlineButton>
  );
}
