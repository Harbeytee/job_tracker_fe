"use client";
import { useEffect, useState } from "react";
import i18n, { initI18n } from "./config";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setup = async () => {
      if (!i18n.isInitialized) {
        await initI18n();
      }
      setIsReady(true);
    };
    setup();
  }, []);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}
