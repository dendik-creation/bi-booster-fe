"use client";

import { OrderFormValues } from "../schema";
import { Check, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { templates } from "@/app/utils/static/static_templates";

interface Step5Props {
  values: OrderFormValues;
}

export default function Step5ResultPreview({ values }: Step5Props) {
  const [isGenerating, setIsGenerating] = useState(true);
  const [heroPlaceholder, setHeroPlaceholder] = useState(
    "/placeholders/hero.jpg",
  );

  useEffect(() => {
    // Simulate generation delay
    const timer = setTimeout(() => {
      setIsGenerating(false);

      // Trigger confetti from left and right edges
      const end = Date.now() + 3 * 1000;
      const colors = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }, 2500);

    const findHeroBySlugValues = () => {
      const slug = values.templateSlug;
      const hero = templates.find((template) => template.slug === slug)?.image;
      if (hero) {
        setHeroPlaceholder(hero);
      }
    };

    findHeroBySlugValues();

    return () => {
      clearTimeout(timer);
    };
  }, [values.templateSlug]);

  if (isGenerating) {
    return (
      <div className="bg-white p-12 rounded-2xl border border-[#e2e8f0] shadow-sm max-w-2xl mx-auto w-full min-h-[50vh] flex flex-col items-center justify-center text-center">
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-4 border-[#e2e8f0] rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#2563eb] rounded-full border-t-transparent animate-spin"></div>
          <Sparkles
            className="absolute inset-0 m-auto text-[#2563eb] animate-pulse"
            size={32}
          />
        </div>
        <h2 className="text-3xl font-black text-[#111827] mb-4 animate-pulse">
          Membangun Website Anda...
        </h2>
        <p className="text-[#6b7280] max-w-sm">
          AI kami sedang membangun struktur, menyesuaikan warna, dan
          mendaftarkan domain {values.subdomain}
          {values.domainExtension} untuk {values.businessName}.
        </p>
      </div>
    );
  }

  const liveUrl = `https://${values.subdomain}${values.domainExtension}`;

  return (
    <div className="animate-in zoom-in-95 duration-500 bg-white p-8 sm:p-12 rounded-2xl border border-[#e2e8f0] shadow-sm max-w-4xl mx-auto w-full text-center relative overflow-hidden">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20 relative z-10">
        <Check size={40} strokeWidth={3} />
      </div>

      <h2 className="text-4xl sm:text-5xl font-black text-[#111827] mb-4 tracking-tight relative z-10">
        Website Siap Diakses!
      </h2>
      <p className="text-lg text-[#6b7280] mb-10 relative z-10">
        Selamat! Website untuk{" "}
        <strong className="text-[#111827]">{values.businessName}</strong> sudah
        berhasil dibuat dan siap menerima pengunjung.
      </p>

      {/* Mockup Showcase with Next Image */}
      <div className="relative mx-auto max-w-2xl bg-white rounded-2xl border-2 border-[#e2e8f0] shadow-xl overflow-hidden aspect-16/10 flex flex-col mb-10 group z-10">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#f8fafc] border-b border-[#e2e8f0] shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-3 h-7 rounded-md bg-white border border-[#e2e8f0] flex items-center px-3 gap-2 overflow-hidden text-ellipsis">
            <span className="text-xs text-[#9ca3af] whitespace-nowrap">
              https://
            </span>
            <span className="text-xs text-[#111827] font-medium truncate">
              {values.subdomain}
              {values.domainExtension}
            </span>
          </div>
        </div>

        <div className="flex-1 relative bg-gray-100 overflow-hidden">
          {/* Fallback load placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-0">
            <span className="text-gray-400 text-sm font-medium">
              Memuat Hasil Mockup...
            </span>
          </div>

          {/* Static Placeholder Hero Mockup */}
          <Image
            src={heroPlaceholder}
            alt="Website Hero Mockup Preview"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105 z-10"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <Link
          href={liveUrl}
          target="_blank"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563eb] text-white text-base font-bold hover:bg-[#1d4ed8] active:scale-95 transition-all shadow-lg shadow-blue-300/50"
        >
          Kunjungi Website
          <ExternalLink size={20} />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#374151] text-base font-bold hover:bg-gray-50 border-2 border-[#e2e8f0] active:scale-95 transition-all outline-none"
        >
          Ke Dasbor
        </Link>
      </div>
    </div>
  );
}
