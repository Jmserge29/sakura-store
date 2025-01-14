import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/abril-fatface";
import GitHub from '../components/Fixed/GitHub'
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header/>
          <main className="container mx-auto pt-44">
            {children}
          </main>
        <GitHub/>
      </body>
    </html>
  );
}
