"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import GoogleAuth from "./components/google-auth";
import Form from "./components/form";

export default function SignIn() {
  const lineClass = "bg-gray-300 block w-full h-[1px] rounded-lg";
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen dark:text-gray-200 py-6 px-1.5">
      <div className="md:bg-indigo-950  w-full max-w-[600px] md:p-4 rounded-3xl">
        <div className="bg-white dark:bg-black-400 rounded-xl p-4 md:p-7 pb-12">
          <h2 className="text-center text-4xl text-primary font-bold mb-8">
            JobBuddy
          </h2>
          <Form />

          <div className="flex items-center mt-11">
            <div className={lineClass}></div>
            <p className="whitespace-nowrap mx-4"> {t("continue")}</p>

            <div className={lineClass}></div>
          </div>
          <GoogleAuth />

          <p className="text-center ">
            {t("sign_in.new_user")}{" "}
            <Link className="text-primary font-bold ml-0.5" href={""}>
              {t("sign_up.text")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
