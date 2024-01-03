import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trivia Raiders",
  description: "Trivia Raiders is a trivia game for the whole family.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html data-theme="dark" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
