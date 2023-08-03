import ScrollProgress from "@/components/ScrolProgress";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--FONTINTER" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--FONTROBOTO",
});
const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--FONTDM",
});

export const metadata: Metadata = {
  title: "Aydogdy The Dugg",
  description:
    "I am Aydogdy. I am a web developer with 3 years of hands-on experience in crafting exception online experiences. I will help you create an outstanding online presence for your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable}${roboto.variable}${dmsans.variable}`}>
        <ScrollProgress>{children}</ScrollProgress>
      </body>
    </html>
  );
}
