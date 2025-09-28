"use client";
import { ReactNode } from "react";
import I18nProvider from "../internationalization/i18n-provider";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: ProvidersProps) {
  return (
    <I18nProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        {children}
      </ThemeProvider>
    </I18nProvider>
  );
}
