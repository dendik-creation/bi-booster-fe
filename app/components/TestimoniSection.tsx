"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    review:
      "Penjualan warung saya naik drastis sejak pakai BI Booster! Pelanggan bisa pesan online kapan saja.",
    name: "Budi Santoso",
    job: "Pemilik Warung Makan",
    initial: "BS",
  },
  {
    review:
      "Serius, gampang banget. Dalam 30 menit website toko hijab saya sudah online. Highly recommended!",
    name: "Siti Rahayu",
    job: "Owner Toko Hijab",
    initial: "SR",
  },
  {
    review:
      "Booking bengkel sekarang lewat website. Customer lebih percaya dan antrian jadi lebih teratur.",
    name: "Ahmad Fauzi",
    job: "Pemilik Bengkel",
    initial: "AF",
  },
  {
    review:
      "Toko sembako saya jadi terlihat profesional. Banyak yang tanya bikin website di mana, saya rekomendasiin BI Booster.",
    name: "Dewi Kurniasih",
    job: "Pedagang Sembako",
    initial: "DK",
  },
  {
    review:
      "Templatenya bagus-bagus dan mudah dikustomisasi. Support teamnya juga responsif banget!",
    name: "Reza Pratama",
    job: "Pemilik Kafe",
    initial: "RP",
  },
  {
    review:
      "Omzet salon saya meningkat 40% setelah website live. Customer bisa lihat portofolio dan booking online.",
    name: "Putri Handayani",
    job: "Owner Salon Kecantikan",
    initial: "PH",
  },
];

const avatarColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-teal-500",
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 bintang">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  review,
  name,
  job,
  initial,
  colorClass,
}: (typeof testimonials)[number] & { colorClass: string }) {
  return (
    <article className="shrink-0 w-72 sm:w-80 bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm flex flex-col gap-4 mx-3">
      <StarRating />
      <p className="text-sm text-[#374151] leading-relaxed flex-1">
        &ldquo;{review}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-[#f1f5f9]">
        <div
          className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-white text-sm font-black`}
        >
          {initial}
        </div>
        <div>
          <p className="text-sm font-bold text-[#111827]">{name}</p>
          <p className="text-xs text-[#6b7280]">{job}</p>
        </div>
      </div>
    </article>
  );
}

export default function TestimoniSection() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimoni"
      className="py-20 bg-linear-to-br from-[#eff6ff] to-[#ecfdf5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-[#2563eb] bg-blue-50 border border-blue-200 rounded-full">
          Testimoni
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight">
          Kata Mereka yang Sudah Online
        </h2>
        <p className="mt-3 text-lg text-[#6b7280]">
          Ribuan UMKM telah buktikan manfaatnya.
        </p>
      </div>

      <div className="relative overflow-hidden" aria-label="Testimoni pelanggan">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#eff6ff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#ecfdf5] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {doubled.map((t, i) => (
            <TestimonialCard
              key={i}
              {...t}
              colorClass={avatarColors[i % avatarColors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
