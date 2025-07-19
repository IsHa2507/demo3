import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "WhatsApp Business API Platform - Fast, Secure & Scalable",
  description:
    "Transform your WhatsApp communication with automated messaging, broadcast campaigns, and AI-powered chatbots. Start free today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`
          ${spaceGrotesk.variable}
          font-sans bg-black text-white
        `}
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {children}
      </body>
    </html>
  );
}
