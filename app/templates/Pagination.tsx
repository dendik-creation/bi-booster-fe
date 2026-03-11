import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  category,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    params.set("page", String(page));
    return `/templates?${params.toString()}`;
  };

  // Build page number array (show max 5 pages around current)
  const pages: number[] = [];
  const delta = 2;
  const from = Math.max(1, currentPage - delta);
  const to = Math.min(totalPages, currentPage + delta);
  for (let i = from; i <= to; i++) pages.push(i);

  const btnBase =
    "inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-200 border";

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center items-center gap-2 mt-12 mb-8"
    >
      {/* Prev */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(currentPage - 1)}
          className={`${btnBase} bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300`}
          aria-label="Halaman sebelumnya"
        >
          <ChevronLeft size={16} />
        </Link>
      ) : (
        <span
          className={`${btnBase} bg-white border-gray-100 text-gray-300 cursor-not-allowed`}
          aria-disabled="true"
        >
          <ChevronLeft size={16} />
        </span>
      )}

      {/* Show first page + ellipsis if far away */}
      {from > 1 && (
        <>
          <Link
            href={buildHref(1)}
            className={`${btnBase} bg-white border-gray-200 text-gray-600 hover:bg-gray-50`}
          >
            1
          </Link>
          {from > 2 && (
            <span className="px-1 text-gray-400 text-sm select-none">…</span>
          )}
        </>
      )}

      {/* Page numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={[
            btnBase,
            page === currentPage
              ? "bg-[#2563eb] border-[#2563eb] text-white shadow-sm shadow-blue-200 pointer-events-none"
              : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300",
          ].join(" ")}
        >
          {page}
        </Link>
      ))}

      {/* Show last page + ellipsis if far away */}
      {to < totalPages && (
        <>
          {to < totalPages - 1 && (
            <span className="px-1 text-gray-400 text-sm select-none">…</span>
          )}
          <Link
            href={buildHref(totalPages)}
            className={`${btnBase} bg-white border-gray-200 text-gray-600 hover:bg-gray-50`}
          >
            {totalPages}
          </Link>
        </>
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={buildHref(currentPage + 1)}
          className={`${btnBase} bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300`}
          aria-label="Halaman berikutnya"
        >
          <ChevronRight size={16} />
        </Link>
      ) : (
        <span
          className={`${btnBase} bg-white border-gray-100 text-gray-300 cursor-not-allowed`}
          aria-disabled="true"
        >
          <ChevronRight size={16} />
        </span>
      )}
    </nav>
  );
}
