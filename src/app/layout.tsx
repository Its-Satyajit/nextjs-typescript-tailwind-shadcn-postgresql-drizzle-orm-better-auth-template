import "../styles/globals.css";

import type { Metadata } from "next";

import {
  R,
  RI,
} from "@/styles/Fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${R.variable} ${RI.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
