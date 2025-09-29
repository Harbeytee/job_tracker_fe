"use client";
import Logo from "./logo";
import { getNavLinks } from "./helpers";
import Link from "next/link";
import { capitalize } from "../ui-library/utils.ts/helper";
import { Icon } from "../ui-library/components/icons/icon";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const navLinks = getNavLinks();
  const pathname = usePathname();

  return (
    <nav className="lg:w-[20%] lg:rounded-xl bg-neutral-300 dark:bg-black-400 flex flex flex-col items-center py-5 lg:py-6 overflow-y-hidden hover:overflow-y-scroll  lg:relative fixed w-full top-0 left-0">
      <div className="flex lg:block w-full px-3 items-center justify-between">
        {" "}
        <Logo className={""} />
        <div className="lg:hidden"></div>
      </div>

      <div className="flex flex-col hidden lg:block mt-8">
        {" "}
        {navLinks.map((link) => {
          const { route, name, icon } = link;
          const isActive = route && pathname.includes(route);

          return (
            <Link
              key={name}
              href={route}
              className={`text-xl ${
                isActive
                  ? "font-bold text-primary bg-primary/20 dark:bg-black-950 border-l-[6px] border-primary"
                  : "font-medium"
              } my-3 flex gap-3 items-center py-2.5 px-5 rounded-md`}
            >
              <Icon name={icon} />
              {capitalize(name)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
