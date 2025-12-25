import "./globals.css";
import type { Metadata } from "next";
import AgeGate from "@/components/AgeGate";

export const metadata: Metadata = {
  title: "Time Brewery",
  description: "Time Brewery — Enjoy your moment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AgeGate />
        {children}
      </body>
    </html>
  );
}