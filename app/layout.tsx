import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NDI Dashboard - Nusantara Data Indonesia",
  description: "Dashboard untuk visualisasi data dan manajemen sistem NDI",
  keywords: ["dashboard", "ndi", "data visualization", "analytics"],
  authors: [{ name: "NDI Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}