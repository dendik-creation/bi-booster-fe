import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import CategoryFilter from "./CategoryFilter";
import TemplateCard from "./TemplateCard";
import Pagination from "./Pagination";
import {
  templates,
  categoryTemplates,
} from "@/app/utils/static/static_templates";

export const metadata: Metadata = {
  title: "Template Website Premium Untuk UMKM",
  description:
    "Eksplorasi puluhan template website premium untuk berbagai kategori bisnis UMKM: Kuliner, Fashion, Jasa, dan Retail. Pilih dan online dalam menit!",
  alternates: {
    canonical: "https://bibooster.agency/templates",
  },
  openGraph: {
    title: "BI Booster - Template Website Premium",
    description:
      "Eksplorasi puluhan template website premium untuk berbagai kategori bisnis UMKM: Kuliner, Fashion, Jasa, dan Retail.",
    url: "https://bibooster.agency/templates",
    type: "website",
  },
};

const ITEMS_PER_PAGE = 10;

interface PageProps {
  searchParams: Promise<{ category?: string; page?: string }>;
}

export default async function TemplatesPage({ searchParams }: PageProps) {
  const { category = "", page = "1" } = await searchParams;

  // Filter by category
  const filtered = category
    ? templates.filter((t) => t.category === category)
    : templates;

  // Pagination
  const currentPage = Math.max(1, parseInt(page, 10) || 1);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));
  const startIdx = (safePage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  // Build category name lookup
  const categoryMap = Object.fromEntries(
    categoryTemplates.map((c) => [c.slug, c.name]),
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Page header */}
        <header className="bg-white border-b border-[#e2e8f0]">
          <div className="w-full px-4 md:px-8 lg:max-w-7xl lg:mx-auto py-14 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-[#2563eb] bg-blue-50 border border-blue-100 rounded-full">
              Template Website
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] leading-tight mb-4">
              Pilih Template Website Impianmu
            </h1>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
              Jelajahi puluhan desain instan yang siap diubah menjadi website
              profesional untuk UMKM Anda dalam hitungan menit.
            </p>
          </div>
        </header>

        {/* Main content */}
        <div className="w-full px-4 md:px-8 lg:max-w-7xl lg:mx-auto py-10">
          {/* Category filter — Client Component inside Suspense for searchParams */}
          <Suspense
            fallback={
              <div className="h-12 mb-10 animate-pulse bg-gray-100 rounded-full w-full max-w-lg" />
            }
          >
            <CategoryFilter categories={categoryTemplates} />
          </Suspense>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[#6b7280]">
              Menampilkan{" "}
              <span className="font-semibold text-[#111827]">
                {paginated.length}
              </span>{" "}
              dari{" "}
              <span className="font-semibold text-[#111827]">
                {filtered.length}
              </span>{" "}
              template
            </p>
          </div>

          {/* Template grid */}
          {paginated.length > 0 ? (
            <section aria-label="Daftar Template">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginated.map((template) => (
                  <TemplateCard
                    key={template.slug}
                    template={template}
                    categoryName={
                      categoryMap[template.category] ?? template.category
                    }
                  />
                ))}
              </div>
            </section>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-[#2563eb]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#111827] mb-2">
                Template tidak ditemukan
              </h2>
              <p className="text-[#6b7280] text-sm max-w-xs">
                Belum ada template untuk kategori ini. Coba lihat kategori lain.
              </p>
            </div>
          )}

          {/* Pagination */}
          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            category={category}
          />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
