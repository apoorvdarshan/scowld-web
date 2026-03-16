import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scowld — AI Companion",
  description: "Open-source AI companion with a 3D anime avatar, hands-free voice, vision, and persistent memory.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Scowld — AI Companion",
    description: "3D anime avatar. Hands-free voice. Vision. Persistent memory. Open source.",
    url: "https://scowld.vercel.app",
    siteName: "Scowld",
    type: "website",
    images: [
      {
        url: "https://scowld.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Scowld — Your AI Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scowld — AI Companion",
    description: "3D anime avatar. Hands-free voice. Vision. Persistent memory. Open source.",
    images: ["https://scowld.vercel.app/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
