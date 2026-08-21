import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'Bagaimana cara bergabung?',
    answer:
      'Anda dapat mengunduh aplikasi kami atau mendaftar melalui situs web ini, lalu buat akun dan ikuti panduan awal penyetoran botol plastik.',
  },
  {
    question: 'Apakah ada biaya penggunaan layanan ini?',
    answer:
      'Tidak, bergabung dan menggunakan platform kami adalah gratis. Kami memberikan insentif bagi Anda yang berkontribusi dalam penyetoran botol plastik.',
  },
  {
    question: 'Bagaimana cara mendapatkan insentif?',
    answer:
      'Setiap botol plastik yang Anda setorkan ke titik drop point atau mitra kami akan ditimbang/dihitung, lalu poin atau saldo insentif akan otomatis masuk ke akun Anda.',
  },
];

export default function FAQ() {
  // Nilai awal null agar semua accordion tertutup di awal
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-20 py-12 px-4 max-w-6xl mx-auto font-sans overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="inline-block text-sky-600 font-semibold text-lg border-b-2 border-sky-400 pb-0.5 mb-3">
          Pertanyaan
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
          Masih bingung Yuk Kita Liat <span className="text-sky-600">FAQ</span> Kami
        </h2>
      </motion.div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? 'border-sky-300 shadow-md ring-1 ring-sky-100'
                  : 'border-slate-100 hover:border-sky-200 hover:shadow-md'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
              >
                <span className="text-base md:text-lg font-semibold text-sky-700">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4 text-sky-600"
                >
                  <ChevronDown className="w-6 h-6 stroke-[2.5]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-slate-700 text-sm md:text-base leading-relaxed border-t border-slate-50">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}