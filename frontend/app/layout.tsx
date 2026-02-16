import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Munway Store",
  description: "Twoje ubrania w jednym miejscu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
