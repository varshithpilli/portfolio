import type { Metadata } from "next";
import { Josefin_Sans, Ovo, Poppins, Prompt, Roboto, Work_Sans, Cormorant_Garamond, Crimson_Text  } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
});

const cg = Cormorant_Garamond({
  variable: "--font-cormorantGaramond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ct = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimsonText",
  weight: ["400", "600", "700"],
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
        className={`${workSans.variable} ${cg.variable} ${ct.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkBg dark:text-white/90 font-prompt tracking-wide`}
      >
        {children}
      </body>
    </html>
  );
}
