import Link from "next/link";
import { ArrowRight, Monitor } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-br from-[#eff6ff] via-[#f8fafc] to-[#ecfdf5] pt-16 pb-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/60 to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Content */}
        <div className="flex flex-col gap-8">
          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#111827]">
            Website Instan untuk{" "}
            <span className="relative">
              <span className="text-[#2563eb]">UMKM Hebat.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 300 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 3 Q75 0 150 3 Q225 6 300 3"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-xl">
            Terjun dalam digital hitungan menit. Pilih template, sesuaikan, dan
            mulai jualan online hari ini juga{" "}
            <strong className="text-[#111827]">
              tanpa pusing mikirin koding.
            </strong>
          </p>

          {/* CTA Buttons */}
          <div id="hero-cta" className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/templates"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563eb] text-white text-base font-bold hover:bg-[#1d4ed8] active:scale-95 transition-all duration-200 shadow-lg shadow-blue-300/50 min-h-[52px]"
            >
              Buat Website Sekarang
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#cara-kerja"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#374151] text-base font-semibold border-2 border-[#e2e8f0] hover:border-[#2563eb] hover:text-[#2563eb] active:scale-95 transition-all duration-200 min-h-[52px]"
            >
              Lihat Cara Kerjanya
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 border border-blue-200">
              <Monitor size={18} className="text-blue-600" />
            </div>
            <p className="text-sm text-[#6b7280]">
              <strong className="text-[#111827]">1,200+ UMKM</strong> sudah
              online bersama BI Booster
            </p>
          </div>
        </div>

        {/* Right — Visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md mx-auto">
            {/* Floating card mockup */}
            <div className="relative rounded-2xl bg-white border-2 border-[#e2e8f0] shadow-2xl overflow-hidden aspect-4/3 flex flex-col">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-3 h-6 rounded-md bg-white border border-[#e2e8f0] flex items-center px-3">
                  <span className="text-xs text-[#6b7280]">
                    umkmku.bibooster.agency
                  </span>
                </div>
              </div>

              {/* Website preview */}
              <div className="p-4 bg-linear-to-br from-orange-50 to-amber-100 flex-1 flex flex-col">
                {/* Navbar mini */}
                <div className="flex items-center justify-between mb-6">
                  {/* Logo wireframe */}
                  <div className="w-6 h-6 rounded-full bg-orange-200" />
                  {/* Nav links wireframe */}
                  <div className="flex gap-2">
                    <div className="w-6 h-1 rounded-full bg-orange-200/70" />
                    <div className="w-6 h-1 rounded-full bg-orange-200/70" />
                    <div className="w-6 h-1 rounded-full bg-orange-200/70" />
                  </div>
                </div>

                {/* Hero content mini */}
                <div className="flex flex-col items-center justify-center flex-1 text-center -mt-4">
                  <div className="space-y-2 mb-3 w-full flex flex-col items-center">
                    <div className="w-3/4 h-4 rounded-md bg-orange-300" />
                    <div className="w-1/2 h-4 rounded-md bg-orange-300" />
                  </div>
                  <div className="space-y-1.5 w-full flex flex-col items-center">
                    <div className="w-2/3 h-1.5 rounded-full bg-orange-200" />
                    <div className="w-1/2 h-1.5 rounded-full bg-orange-200" />
                  </div>
                  {/* CTA button mini */}
                  <div className="w-20 h-6 rounded-md bg-orange-500 mt-5 shadow-sm" />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-xl px-3 py-2 shadow-lg text-xs font-bold flex items-center gap-1.5 animate-pulse">
              Langsung Online!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border-2 border-[#e2e8f0] rounded-xl px-3 py-2 shadow-lg text-xs font-semibold text-[#374151] flex items-center gap-1.5">
              <span className="text-yellow-400">★★★★★</span>
              <span>5.0 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
