import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/common/Header";
import { Raleway } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const raleway = Raleway({
  weight: ["500", "700"],
  style: "normal",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Paras Sharma",
  description:
    "Explore the portfolio of paras sharma, a passionate front-end developer specializing in creating visually stunning and highly functional web applications. Discover innovative projects, expertise in modern technologies, and a commitment to delivering exceptional user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.className} antialiased`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
