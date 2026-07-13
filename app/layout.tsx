import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3001";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "Spin Academia | Movimento para todos em Catanduva",
    description: "Musculação, pilates, funcional, ballet, ritmos, skate e muito mais. Agende sua aula experimental na Spin Academia, em Catanduva.",
    icons: { icon: "/spin-marca.jpg", shortcut: "/spin-marca.jpg" },
    openGraph: {
      title: "Spin Academia | Seu movimento. Do seu jeito.",
      description: "Movimento para todas as idades em Catanduva. Agende sua aula experimental.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: `${baseUrl}/og.png`, width: 1200, height: 630, alt: "Spin Academia — seu movimento, do seu jeito" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Spin Academia | Seu movimento. Do seu jeito.",
      description: "Movimento para todas as idades em Catanduva.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
