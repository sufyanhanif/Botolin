import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'hero', label: 'Beranda' },
  { id: 'about', label: 'Tentang Kami' },
  { id: 'tujuan', label: 'Tujuan' },
  { id: 'faq', label: 'Pertanyaan' },
  { id: 'footer', label: 'Hubungi Kami' },
];

export default function Footer({ logoSrc }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="footer" className="scroll-mt-28 relative mt-28 font-sans">
      {/* 1. Floating Overlapping CTA Banner */}
      <div className="max-w-6xl mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#5e8fb8] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center md:text-left tracking-wide">
            Mari Berkolaborasi Bersama Kami
          </h2>
          <a
            href="#"
            className="whitespace-nowrap bg-white text-[#5e8fb8] hover:bg-sky-50 font-semibold px-7 py-3.5 rounded-xl shadow transition-all duration-300 hover:scale-105"
          >
            Gabung Menjadi Mitra
          </a>
        </motion.div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="relative bg-gradient-to-b from-[#bfe9f7] via-[#c6edfa] to-[#d6f4ff] pt-24 pb-8 -mt-14 z-10 overflow-hidden">
        {/* Lingkaran Dekorasi Kiri */}
        <div className="absolute top-4 -left-16 w-48 h-48 bg-[#8ebedb]/60 rounded-full pointer-events-none" />

        {/* Lingkaran Dekorasi Kanan */}
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#8ebedb]/60 rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
            
            {/* Kolom 1: Brand Logo & Bio */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center">
                <a 
                  href="#hero" 
                  onClick={(e) => scrollToSection(e, 'hero')}
                  className="cursor-pointer"
                >
                  <img 
                    src={logoSrc || "/assets/logo.png"} 
                    alt="Botolin Logo" 
                    className="h-10 w-auto object-contain"
                  />
                </a>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed max-w-sm">
                Kami menyediakan layanan untuk penjualan botol plastik, memastikan setiap transaksi Anda berkontribusi langsung pada pengurangan limbah plastik di Bumi.
              </p>
            </div>

            {/* Kolom 2: Jelajah (Smooth Scroll Links) */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-slate-800 text-base mb-4">Jelajah</h3>
              <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className="hover:text-sky-700 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3: Lokasi */}
            <div className="lg:col-span-3">
              <h3 className="font-bold text-slate-800 text-base mb-4">Lokasi</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Popuri Tembalang No 50 
              </p>
            </div>

            {/* Kolom 4: Ikuti */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-slate-800 text-base mb-4">Ikuti</h3>
              <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                <li>
                  <a href="#" className="hover:text-sky-700 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-700 transition-colors">
                    X
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 5: Hubungi */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-slate-800 text-base mb-4">Hubungi</h3>
              <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                <li>
                  <a href="mailto:botolin@gmail.com" className="hover:text-sky-700 transition-colors break-all">
                    botolin@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+62820202220" className="hover:text-sky-700 transition-colors">
                    +62820202220
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Garis Pemisah & Copyright */}
          <div className="pt-6 border-t border-slate-400/30 text-slate-700 text-xs md:text-sm">
            Copyright ©2025 Botolin. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}