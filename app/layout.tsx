import type { Metadata } from 'next'
import "./globals.css";
import PrimaryHeader from "@/components/PrimaryHeader";
import PrimaryFooter from "@/components/PrimaryFooter";

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
      <body>
        <PrimaryHeader />
        {children}
        <PrimaryFooter />
      </body>
    </html>
  );
}
