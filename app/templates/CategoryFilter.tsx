"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { CategoryTemplate } from "@/app/utils/static/static_templates";

interface CategoryFilterProps {
  categories: CategoryTemplate[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "";

  const buildHref = (slug: string) => {
    const params = new URLSearchParams();
    if (slug) params.set("category", slug);
    params.set("page", "1");
    return `/templates?${params.toString()}`;
  };

  const allItems = [
    { slug: "", name: "Semua Kategori" },
    ...categories.map((c) => ({ slug: c.slug, name: c.name })),
  ];

  return (
    <nav aria-label="Kategori Template" className="mb-10">
      <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap pb-1">
        {allItems.map((item) => {
          const isActive = activeCategory === item.slug;
          return (
            <Link
              key={item.slug}
              href={buildHref(item.slug)}
              className={[
                "inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 select-none border shrink-0",
                isActive
                  ? "bg-[#2563eb] text-white border-[#2563eb] shadow-sm shadow-blue-200"
                  : "bg-white text-[#374151] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:border-[#cbd5e1]",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
