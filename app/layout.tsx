import type { Metadata } from 'next'
import "./globals.css";
import PrimaryHeader from "@/components/PrimaryHeader";
import PrimaryFooter from "@/components/PrimaryFooter";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Clarissa Creates",
  description:
    "Hi! I'm Clarissa Jaime, a software engineer and educator with a passion for building scalable, user-friendly applications and empowering the next generation of developers.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-DHM1RTPW2J" />
      <body>
        <PrimaryHeader />
        {children}
        <PrimaryFooter />
      </body>
    </html>
  );
}
