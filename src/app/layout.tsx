import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Brewery",
  description: "Time Brewery — Enjoy your moment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}