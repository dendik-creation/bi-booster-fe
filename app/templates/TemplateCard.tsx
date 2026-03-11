import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingCart } from "lucide-react";
import type { Template } from "@/app/utils/static/static_templates";

interface TemplateCardProps {
  template: Template;
  categoryName: string;
}

export default function TemplateCard({
  template,
  categoryName,
}: TemplateCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
      {/* Image area */}
      <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden">
        <Image
          src={template.image}
          alt={`Template website responsif untuk ${template.name} — kategori ${categoryName} UMKM`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category badge — top left */}
        <span className="absolute top-3 left-3 bg-white text-[#2563eb] px-3 py-1 rounded-full text-xs font-medium shadow-sm border border-blue-50">
          {categoryName}
        </span>

        {/* Popular badge — top right, only if isPopular */}
        {template.isPopular && (
          <span className="absolute top-3 right-3 bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            Unggulan
          </span>
        )}
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-1">
          {template.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 grow leading-relaxed">
          {template.description}
        </p>

        {/* Used count */}
        <p className="text-xs text-gray-400 mb-3">
          <span className="font-semibold text-gray-600">
            {template.used_count.toLocaleString("id-ID")}
          </span>{" "}
          UMKM Telah Menggunakan
        </p>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            // href={`/templates/${template.slug}`}
            href={`#`}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#2563eb] text-[#2563eb] bg-transparent text-sm font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            <Eye size={15} />
            Preview
          </Link>
          <Link
            // href={`/order?template=${template.slug}`}
            href={`#`}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors duration-200"
          >
            <ShoppingCart size={15} />
            Pesan
          </Link>
        </div>
      </div>
    </article>
  );
}
