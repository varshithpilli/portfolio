import type { Metadata } from "next";
import { Josefin_Sans, Ovo, Poppins, Prompt, Roboto, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varshith Pilli",
  description: "Made by Var, using Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkBg dark:text-white/90 font-prompt tracking-wide`}
      >
        {children}
      </body>
    </html>
  );
}
