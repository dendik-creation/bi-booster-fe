import type { Metadata } from "next";
import type { WithContext, LocalBusiness } from "schema-dts";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import TentangKamiSection from "@/app/components/TentangKamiSection";
import KategoriTemplateSection from "@/app/components/KategoriTemplateSection";
import CaraKerjaSection from "@/app/components/CaraKerjaSection";
import TestimoniSection from "@/app/components/TestimoniSection";
import FooterSection from "@/app/components/FooterSection";

// Page-level metadata — more specific than global fallback in layout.tsx
export const metadata: Metadata = {
  title: "Website Instan UMKM — Jasa Pembuatan Website Murah & Cepat",
  description:
    "BI Booster: jasa pembuatan website toko online untuk UMKM. Template website bisnis siap pakai, digitalisasi UMKM dalam hitungan menit. Daftar gratis!",
  alternates: {
    canonical: "https://bibooster.agency",
  },
  openGraph: {
    title: "BI Booster — Website Instan untuk UMKM Hebat",
    description:
      "Jasa pembuatan website toko online untuk UMKM. Template siap pakai, go digital dalam hitungan menit.",
    url: "https://bibooster.agency",
    type: "website",
  },
};

// JSON-LD: LocalBusiness structured data
const jsonLd: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BI Booster",
  description:
    "Platform pembuatan website instan terbaik untuk UMKM Indonesia. Pilih template, sesuaikan, dan online tanpa coding.",
  url: "https://bibooster.agency",
  logo: "https://bibooster.agency/logo.png",
  image: "https://bibooster.agency/og-image.jpg",
  email: "halo@bibooster.agency",
  priceRange: "Rp",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressLocality: "Jakarta",
  },
  sameAs: [
    "https://www.instagram.com/bibooster.apps/",
    "https://tiktok.com/@bibooster.agency",
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <HeroSection />
        <TentangKamiSection />
        <KategoriTemplateSection />
        <CaraKerjaSection />
        <TestimoniSection />
        <FooterSection />
      </main>
    </>
  );
}
