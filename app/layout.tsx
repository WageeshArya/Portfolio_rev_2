import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wageesh Arya | アリャー ワギーシ",
  description:
    "Hello! I'm a full stack web developer. Check out my personal portfolio at https://www.wageesharya.com!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
