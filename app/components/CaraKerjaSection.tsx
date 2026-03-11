import { ImageIcon, Paintbrush, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Pilih Template",
    description:
      "Temukan desain yang paling cocok dengan jenis usaha Anda dari galeri kami.",
    Icon: ImageIcon,
    color: {
      bg: "from-blue-500 to-indigo-600",
      light: "bg-blue-50",
      border: "border-blue-100",
      badge: "text-blue-600 bg-blue-50",
      num: "text-blue-100/20",
    },
  },
  {
    step: "02",
    title: "Sesuaikan Konten",
    description:
      "Ubah teks, masukkan foto produk, dan atur warna sesuai identitas brand Anda.",
    Icon: Paintbrush,
    color: {
      bg: "from-violet-500 to-purple-600",
      light: "bg-violet-50",
      border: "border-violet-100",
      badge: "text-violet-600 bg-violet-50",
      num: "text-violet-100/20",
    },
  },
  {
    step: "03",
    title: "Pesan & Publikasikan",
    description:
      "Selesaikan pesanan dan website Anda langsung online siap menerima pelanggan.",
    Icon: Rocket,
    color: {
      bg: "from-emerald-500 to-teal-600",
      light: "bg-emerald-50",
      border: "border-emerald-100",
      badge: "text-emerald-600 bg-emerald-50",
      num: "text-emerald-100/20",
    },
  },
];

export default function CaraKerjaSection() {
  return (
    <section
      id="cara-kerja"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] relative overflow-hidden"
    >
      {/* Subtle background circles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-50/60 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-emerald-50/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-[#10b981] bg-emerald-50 border border-emerald-100 rounded-full">
            <CheckCircle2 size={12} />
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight">
            3 Langkah Untuk Punya Website UMKM
          </h2>
          <p className="mt-4 text-lg text-[#6b7280] max-w-xl mx-auto">
            Tidak perlu keahlian teknis. Siapapun bisa membuat website
            profesional bersama BI Booster.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s) => {
            const { Icon } = s;
            return (
              <div key={s.step} className="relative group">
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8 flex flex-col gap-6">
                  {/* Large ghost step number */}
                  <span
                    className="absolute -top-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none"
                    style={{ color: "#f1f5f9" }}
                    aria-hidden="true"
                  >
                    {s.step}
                  </span>

                  {/* Icon badge + step number */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md text-white bg-linear-to-br ${s.color.bg}`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="relative z-10 flex-1">
                    <h3 className="text-xl font-black text-[#111827] mb-3 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed text-sm">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
