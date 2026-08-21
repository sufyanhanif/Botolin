import React from 'react';
import { Milk, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const targets = [
  {
    icon: Milk,
    title: 'Optimalisasi Pengelolaan Botol Plastik',
    desc: 'Memberdayakan warga dan komunitas Kota Semarang dalam mengelola botol plastik secara efektif dan efisien melalui platform digital.',
  },
  {
    icon: TrendingUp,
    title: 'Peningkatan Nilai Ekonomi Plastik',
    desc: 'Mengubah botol plastik bekas menjadi sumber daya bernilai dengan menghubungkan langsung masyarakat dengan industri daur ulang.',
  },
  {
    icon: Users,
    title: 'Pembentukan Komunitas Lingkungan',
    desc: 'Membangun jaringan kolaboratif antara warga, komunitas, dan industri untuk pengelolaan botol plastik yang berkelanjutan.',
  },
];

// Animasi container induk untuk stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda muncul antar kartu (0.2 detik)
    },
  },
};

// Animasi tiap kartu
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TujuanKami() {
  return (
    <section id="tujuan" className="scroll-mt-20 py-12 px-4 max-w-6xl mx-auto font-sans overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="inline-block text-2xl md:text-3xl font-bold text-sky-700 border-b-2 border-sky-400 pb-1">
          Tujuan Kami
        </h2>
      </motion.div>

      {/* Cards Grid dengan Scroll Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {targets.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-b from-[#eaf8ff] to-[#c7f0ff] p-7 rounded-2xl border border-sky-100 shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:border-sky-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#5387b7] flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#4174a3]">
                <IconComponent className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-800 mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}