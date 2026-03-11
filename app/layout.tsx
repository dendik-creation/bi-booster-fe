import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Wajib: semua relative URL (og-image, canonical) jadi absolute
  metadataBase: new URL("https://bibooster.agency"),

  title: {
    default: "BI Booster - Website Instan Siap Pakai untuk UMKM",
    template: "%s | BI Booster",
  },
  description:
    "Platform pembuatan website instan terbaik untuk UMKM. Pilih template, sesuaikan, dan online dalam hitungan menit tanpa coding.",

  keywords: [
    "website instan UMKM",
    "bikin web murah",
    "template website bisnis",
    "jasa pembuatan website",
    "website toko online",
    "digitalisasi UMKM",
    "website builder Indonesia",
    "BI Booster",
  ],

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bibooster.agency",
    siteName: "BI Booster",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BI Booster - Solusi Website UMKM Indonesia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@bibooster",
  },

  alternates: {
    canonical: "https://bibooster.agency",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
