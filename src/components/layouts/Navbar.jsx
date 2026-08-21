import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Beranda' },
  { id: 'about', label: 'Tentang Kami' },
  { id: 'tujuan', label: 'Tujuan' },
  { id: 'faq', label: 'Pertanyaan' },
  { id: 'footer', label: 'Hubungi Kami' },
];

export default function Navbar({ logoSrc }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Efek background navbar
      setIsScrolled(window.scrollY > 20);

      // 2. Deteksi mentok bawah (Footer)
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection('footer');
        return;
      }

      // 3. Deteksi section aktif
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi scroll aman untuk Desktop & Mobile
  const scrollToSection = (e, id) => {
    e.preventDefault();

    // Tutup menu mobile lebih dulu
    setMobileMenuOpen(false);

    // Timeout mikro agar layout/DOM stabil setelah menu menutup
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -70; // Kompensasi navbar fixed
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + yOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logoSrc || '/assets/logo.png'}
            alt="Botolin Logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`transition-colors duration-200 font-medium cursor-pointer ${
                    isActive
                      ? 'text-sky-600 font-bold'
                      : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3 items-center">
          <a
            href="/login"
            className="border border-sky-500 text-sky-600 hover:bg-sky-50 px-5 py-2 rounded-lg text-sm font-medium transition"
          >
            Masuk
          </a>
          <a
            href="/register"
            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition shadow-sm"
          >
            Register
          </a>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-sky-50 transition focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 stroke-[2.2] text-sky-600" />
          ) : (
            <Menu className="w-6 h-6 stroke-[2.2] text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-b border-sky-100 px-6 pt-2 pb-6 shadow-xl"
          >
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-4 pt-2 pb-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`block text-base transition-colors py-1 cursor-pointer ${
                        isActive
                          ? 'text-sky-600 font-bold'
                          : 'text-slate-700 hover:text-sky-600 font-medium'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 pt-3 border-t border-slate-100">
              <a
                href="/login"
                className="w-full text-center border border-sky-500 text-sky-600 hover:bg-sky-50 py-2.5 rounded-xl text-sm font-medium transition"
              >
                Masuk
              </a>
              <a
                href="/register"
                className="w-full text-center bg-sky-500 hover:bg-sky-600 text-white py-2.5 rounded-xl text-sm font-medium transition shadow-sm"
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}