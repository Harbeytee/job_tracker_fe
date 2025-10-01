"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import GoogleAuth from "../google-auth";
import Form from "./components/form";
import Logo from "../../logo";
import Divider from "@/app/ui-library/components/divider";

export default function SignUp() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen dark:text-gray-200 py-6 px-1.5">
      <div className="md:bg-indigo-950  w-full max-w-[600px] md:p-4 rounded-3xl">
        <div className="bg-white dark:bg-black-400 rounded-xl p-4 md:p-7 pb-12">
          <Logo />
          <Form />
          <Divider text={t("continue")} className="mt-11" />
          <GoogleAuth />

          <p className="text-center ">
            {t("sign_up.old_user")}{" "}
            <Link className="text-primary font-bold ml-0.5" href={"/sign-in"}>
              {t("sign_in.text")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
