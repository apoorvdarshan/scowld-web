import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scowld — AI Companion",
  description:
    "Open-source AI companion with a 3D anime avatar, hands-free voice, vision, and persistent memory. Available on iOS.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Scowld — AI Companion",
    description:
      "3D anime avatar. Hands-free voice. Vision. Persistent memory. Open source.",
    url: "https://scowld.com",
    siteName: "Scowld",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scowld — AI Companion",
    description:
      "3D anime avatar. Hands-free voice. Vision. Persistent memory. Open source.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0e0e0e] text-[#888] font-[family-name:var(--font-geist-sans)] grain`}
      >
        {children}
      </body>
    </html>
  );
}
