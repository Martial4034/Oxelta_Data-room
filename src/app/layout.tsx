// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Room Oxelta",
  description: "Oxelta, the future of gaming with Web 3. Play and earn OXLT tokens with our innovative ecosystem of play-and-earn games, Web 3, NFTs, blockchain games, crypto rewards, and game economy",
  keywords: "data room, oxelta, web3, gaming, NFTs, blockchain, crypto",
  openGraph: {
    title: "Data Room Oxelta",
    description: "Découvrez Oxelta, l'avenir du jeu avec Web 3.",
    url: "https://data.oxelta.io/", 
    images: [
      {
        url: "https://data.oxelta.io/static-site/PHOTO-2023-12-13-08-36-12.jpg",
        alt: "Logo d'Oxelta",
      },
    ],
    siteName: "Oxelta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Room Oxelta",
    description: "Découvrez Oxelta, l'avenir du jeu avec Web 3.",
    images: [
      {
        url: "https://data.oxelta.io/static-site/Oxelta_P2_V2.png", 
        alt: "Image Oxelta",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <SpeedInsights />
        <Analytics />
          {children}
      </body>
    </html>
  );
}
