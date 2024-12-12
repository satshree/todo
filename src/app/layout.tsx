import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

import "./globals.css";
import styles from "./styles.module.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToDo",
  description: "A simple ToDo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className={styles["app-container"]}>
          <div className={styles["top-section"]}></div>
          <div className={styles["body-section"]}>{children}</div>
        </div>
      </body>
    </html>
  );
}
