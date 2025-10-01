import { Icon } from "@/app/ui-library/components/icons/icon";
import { getResumeCards } from "../utils/helpers";
import { TextButton } from "@/app/ui-library/components/buttons/text-button";
import { useRouter } from "next/navigation";

export default function Cards() {
  const cards = getResumeCards();
  const router = useRouter();

  return (
    <div className="flex gap-4 bg-neutral-50 p-5 w-full rounded-lg mt-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="w-[300px] h-[300px] rounded-lg p-4 flex flex-col items-center "
        >
          <div className={`${card.iconBg} mx-auto p-7 mb-8 rounded-lg`}>
            <Icon size={30} name={card.iconName} color={card.iconColour} />
          </div>

          <h4 className="font-bold text-base mb-2.5">{card.title}</h4>
          <p className="text-sm text-center">{card.desc}</p>
          <TextButton
            onClick={() => router.push(`/resume/${card.link}`)}
            className="mt-4"
            trailingIcon="chevron-right"
          >
            {card.button}
          </TextButton>
        </div>
      ))}
    </div>
  );
}
