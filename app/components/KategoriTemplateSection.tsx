import Link from "next/link";
import {
  UtensilsCrossed,
  Shirt,
  Wrench,
  ShoppingCart,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";
import { categoryTemplates } from "@/app/utils/static/static_templates";

const categoryMeta: Record<
  string,
  {
    Icon: React.ElementType;
    gradientFrom: string;
    gradientTo: string;
    iconBg: string;
  }
> = {
  kuliner: {
    Icon: UtensilsCrossed,
    gradientFrom: "#9a3412",
    gradientTo: "#7c2d12",
    iconBg: "rgba(255,255,255,0.15)",
  },
  fashion: {
    Icon: Shirt,
    gradientFrom: "#9d174d",
    gradientTo: "#831843",
    iconBg: "rgba(255,255,255,0.15)",
  },
  jasa: {
    Icon: Wrench,
    gradientFrom: "#5b21b6",
    gradientTo: "#4c1d95",
    iconBg: "rgba(255,255,255,0.15)",
  },
  retail: {
    Icon: ShoppingCart,
    gradientFrom: "#115e59",
    gradientTo: "#134e4a",
    iconBg: "rgba(255,255,255,0.15)",
  },
};

interface BentoCardProps {
  cat: (typeof categoryTemplates)[number];
  className?: string;
}

function BentoCard({ cat, className = "" }: BentoCardProps) {
  const meta = categoryMeta[cat.slug] ?? {
    Icon: LayoutGrid,
    gradientFrom: "#475569",
    gradientTo: "#334155",
    iconBg: "rgba(255,255,255,0.15)",
  };
  const { Icon } = meta;

  return (
    <Link
      href={`/templates?category=${cat.slug}`}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[200px] ${className}`}
      aria-label={`Kategori ${cat.name}`}
    >
      {/* Photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url("${cat.image}")` }}
        aria-hidden="true"
      />

      {/* Gradient color overlay — blends the photo with brand color */}
      <div
        className="absolute inset-0 opacity-75 group-hover:opacity-65 transition-opacity duration-300"
        style={{
          background: `linear-gradient(160deg, ${meta.gradientFrom}cc, ${meta.gradientTo}dd)`,
        }}
        aria-hidden="true"
      />

      {/* Extra dark bottom gradient for text legibility */}
      <div
        className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Large background icon */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
        <Icon size={80} className="text-white" strokeWidth={1.2} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Template count badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold mb-3">
          <Icon size={12} />
          {cat.template_count} Template
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-tight drop-shadow-sm">
          {cat.name}
        </h3>
        <p className="mt-1.5 text-sm text-white/85 leading-snug line-clamp-2 drop-shadow-sm">
          {cat.description}
        </p>

        <span className="mt-3 inline-flex items-center gap-1.5 text-white/90 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
          Lihat Template
          <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}

export default function KategoriTemplateSection() {
  const [kuliner, fashion, jasa, retail] = categoryTemplates;

  return (
    <section
      id="kategori-template"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-[#2563eb] bg-blue-50 border border-blue-100 rounded-full">
            <LayoutGrid size={12} />
            Kategori Template
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight">
            Temukan Template yang Pas untuk Bisnis Anda
          </h2>
          <p className="mt-4 text-lg text-[#6b7280]">
            Tersedia berbagai pilihan template siap pakai untuk semua jenis
            usaha.
          </p>
        </div>

        {/* Bento Grid — explicit layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1: Kuliner spans 2 cols on lg, Fashion is 1 col */}
          {kuliner && (
            <BentoCard cat={kuliner} className="lg:col-span-2 min-h-[280px]" />
          )}
          {fashion && <BentoCard cat={fashion} className="min-h-[280px]" />}

          {/* Row 2: Jasa is 1 col, Retail spans 2 cols on lg */}
          {jasa && <BentoCard cat={jasa} className="min-h-[240px]" />}
          {retail && (
            <BentoCard cat={retail} className="lg:col-span-2 min-h-[240px]" />
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#111827] text-white text-base font-bold hover:bg-[#1f2937] active:scale-95 transition-all duration-200 shadow-lg min-h-[52px]"
          >
            Lihat Semua Template
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
