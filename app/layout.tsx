import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scowld — AI Companion",
  description: "Open-source AI companion with a 3D anime avatar, hands-free voice, vision, and persistent memory.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Scowld — AI Companion",
    description: "3D anime avatar. Hands-free voice. Vision. Persistent memory. Open source.",
    url: "https://scowld.com",
    siteName: "Scowld",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${mono.variable} antialiased bg-[#0a0a0a] text-[#888]`} style={{ fontFamily: "'Satoshi', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
