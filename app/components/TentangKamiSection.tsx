"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, LayoutTemplate, Smartphone } from "lucide-react";

const counters = [
  { label: "Website Aktif", value: "100+", numeric: 100 },
  { label: "UMKM Terbantu", value: "60+", numeric: 60 },
  { label: "Pilihan Template", value: "80+", numeric: 80 },
];

const features = [
  {
    Icon: Zap,
    title: "Setup Cepat",
    desc: "Website siap dalam hitungan menit, bukan hari.",
  },
  {
    Icon: LayoutTemplate,
    title: "80+ Template Siap Pakai",
    desc: "Desain profesional tanpa perlu skill desain.",
  },
  {
    Icon: Smartphone,
    title: "Mobile-Friendly",
    desc: "Tampil sempurna di semua perangkat secara otomatis.",
  },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

export default function TentangKamiSection() {
  return (
    <section id="tentang-kami" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-[#2563eb] bg-blue-50 border border-blue-100 rounded-full">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight">
            Mengapa BI Booster Hadir untuk UMKM?
          </h2>
          <p className="mt-5 text-lg text-[#6b7280] leading-relaxed">
            Kami percaya setiap usaha kecil berhak tampil besar di internet. BI
            Booster menghilangkan hambatan teknis agar Anda bisa fokus pada
            bisnis.
          </p>
        </div>

        {/* Counter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {counters.map((c, i) => {
            const suffix = c.value.replace(/[\d,]/g, "");
            return (
              <div
                key={c.label}
                className="group relative rounded-2xl bg-linear-to-br from-[#eff6ff] to-[#ecfcf5] border-2 border-[#e2e8f0] p-8 text-center hover:border-[#2563eb] hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-5xl sm:text-6xl font-black text-[#2563eb] mb-2 tabular-nums">
                  <AnimatedCounter target={c.numeric} suffix={suffix} />
                </div>
                <p className="text-base font-semibold text-[#374151]">
                  {c.label}
                </p>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#2563eb]/20 group-hover:bg-[#2563eb]/60 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm text-[#2563eb]">
                <Icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-[#111827] text-base">{title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
