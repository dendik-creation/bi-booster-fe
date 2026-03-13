import Link from "next/link";
import { Instagram, Music2, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang-kami", label: "Tentang Kami" },
  { href: "#kategori-template", label: "Kategori" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "/templates", label: "Template" },
];

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <Image src="/favicon.jpg" alt="Logo" width={40} height={40} />
              <span className="text-2xl font-black text-white tracking-tight">
                BI Booster
              </span>
            </Link>
            <p className="text-sm text-[#9ca3af] leading-relaxed max-w-xs">
              Agency website builder instan untuk UMKM Indonesia. Go Digital
              dengan mudah, cepat, dan terjangkau.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/bibooster.apps/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#2563eb] flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 min-h-[44px] min-w-[44px]"
                aria-label="Instagram BI Booster"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@bibooster.apps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#2563eb] flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 min-h-[44px] min-w-[44px]"
                aria-label="TikTok BI Booster"
              >
                <Music2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Navigasi
            </h3>
            <ul className="flex flex-col list-none">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-sm text-[#9ca3af] hover:text-white transition-colors duration-200 min-h-[36px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Produk
            </h3>
            <ul className="flex flex-col list-none">
              {[
                { href: "/templates", label: "Galeri Template" },
                { href: "/order", label: "Pesan Website" },
                { href: "#harga", label: "Harga" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-sm text-[#9ca3af] hover:text-white transition-colors duration-200 min-h-[36px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Kontak
            </h3>
            <address className="not-italic flex flex-col">
              <a
                href="mailto:halo@bibooster.agency"
                className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-white transition-colors duration-200 min-h-[36px]"
              >
                <Mail size={16} className="shrink-0" />
                halo@bibooster.agency
              </a>
              <div className="flex items-start gap-2 text-sm text-[#9ca3af]">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6b7280]">
            © {new Date().getFullYear()} BI Booster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
