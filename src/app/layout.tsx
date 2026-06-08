import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Amani — Arco da Calheta, Madeira",
  description:
    "A house above Calheta, on Madeira's south-west coast. Made to be lived in slowly, on Madeira's sunny side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
