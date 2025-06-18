import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kanishk - Full Stack Developer",
  description:
    "Student & Web/App Developer specializing in React, Next.js, React Native, Golang, Flask and more. Explore my projects and skills.",
  keywords:
    "web developer, app developer, react, nextjs, react native, golang, flask, tailwind, portfolio",
  author: "Kanishk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
