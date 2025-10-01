import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "./internationalization/config";
import AppProviders from "./utils/app-providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job buddy",
  description: "Your personal career assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
