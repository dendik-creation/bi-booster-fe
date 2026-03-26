"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/#beranda", label: "Beranda" },
  { href: "/#tentang-kami", label: "Tentang Kami" },
  { href: "/#kategori-template", label: "Kategori Template" },
  { href: "/#cara-kerja", label: "Cara Kerja" },
  { href: "/#contact", label: "Kontak Kami" },
];

export default function Navbar({
  isOrderPage = false,
}: {
  isOrderPage?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (isOrderPage) {
    return (
      <header className="bg-white border-b border-[#e2e8f0] py-4 px-6 sticky top-0 z-50 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/favicon.jpg" alt="Logo" width={40} height={40} />
            <span className="text-xl font-black tracking-tight text-[#111827]">
              BI Booster
            </span>
          </Link>
          <div className="hidden md:flex">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md shadow-red-200"
            >
              <ArrowLeft size={15} />
              Kembali
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      id="beranda"
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navigasi Utama"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/favicon.jpg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-black tracking-tight text-[#111827]">
            BI Booster
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#6b7280] hover:text-[#2563eb] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:flex">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] active:scale-95 transition-all duration-200 shadow-md shadow-blue-200"
          >
            Buat Website
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors text-[#374151] min-h-[44px] min-w-[44px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 pb-4 gap-1 bg-white border-t border-[#e2e8f0] list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 px-3 rounded-lg text-sm font-medium text-[#374151] hover:text-[#2563eb] hover:bg-[#eff6ff] transition-colors min-h-[44px] items-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#hero-cta"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
              onClick={() => setMenuOpen(false)}
            >
              Mulai Sekarang
              <ArrowRight size={15} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
