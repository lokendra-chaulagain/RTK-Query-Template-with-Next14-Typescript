import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RTK Query Template",
  description: "RTK Query -> Created by Loki Chaulagain (WebX)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
