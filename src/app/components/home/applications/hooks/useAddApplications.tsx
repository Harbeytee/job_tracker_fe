import { ModalTypes } from "@/app/ui-library/types/enums";
import { useRouter } from "next/navigation";

export const useAddApplication = () => {
  const router = useRouter();

  const addApplication = () => {
    router.push(
      `${window.location.pathname}?modal=${ModalTypes.AddApplication}`,
      { scroll: false }
    );
  };

  return addApplication;
};
