import type { Metadata } from "next";
import { Rubik_Storm, Nunito, Montserrat } from "next/font/google";
import Providers from "@/components/providers/providers";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const rubikStorm = Rubik_Storm({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Python for Edexcel O/L - Interactive Learning Platform",
  description:
    "Master Python through interactive lessons and hands-on practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubikStorm.variable} ${nunito.variable} ${montserrat.variable} antialiased`}
      >
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
