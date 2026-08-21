import { motion } from 'framer-motion';
import { Globe, Recycle } from 'lucide-react';

export default function About({ imageSrc }) {
  return (
    <section id="about" className="scroll-mt-20 py-12 md:py-20 px-6 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Gambar Ilustrasi (Kiri) - Ukuran diperkecil saat mode mobile */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img 
            src={imageSrc} 
            alt="Mari Berkolaborasi" 
            className="w-48 sm:w-60 md:w-full max-w-[220px] sm:max-w-xs md:max-w-lg h-auto object-contain"
          />
        </motion.div>

        {/* Konten Teks & Visi Misi (Kanan) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 md:space-y-6 text-left"
        >
          {/* Label Sub-header dengan Underline */}
          <div>
            <span className="inline-block text-sky-600 font-bold text-base md:text-lg border-b-2 border-sky-400 pb-1">
              Tentang Kami
            </span>
          </div>

          {/* Judul utama */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Mari <span className="text-sky-600">Berkolaborasi</span> Menciptakan Bumi Yang Bersih
          </h2>

          {/* Visi Kami */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-sky-500 stroke-[2.2] flex-shrink-0" />
              <h3 className="text-base md:text-lg font-bold text-gray-800">Visi Kami</h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pl-7 md:pl-8">
              Menjadi platform bank <span className="font-semibold text-gray-700">sampah botol plastik</span> digital berbasis <span className="text-sky-600 font-semibold">komunitas</span> yang mendorong pengelolaan plastik <span className="font-semibold text-gray-700">bernilai, berkelanjutan,</span> dan terhubung langsung dengan <span className="text-sky-600 font-semibold">industri daur ulang</span>.
            </p>
          </div>

          {/* Misi Kami */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <Recycle className="w-5 h-5 text-sky-500 stroke-[2.2] flex-shrink-0" />
              <h3 className="text-base md:text-lg font-bold text-gray-800">Misi Kami</h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pl-7 md:pl-8">
              <span className="text-sky-600 font-semibold">Meningkatkan</span> kesadaran masyarakat dalam pengelolaan <span className="font-semibold text-gray-700">sampah botol plastik</span> melalui <span className="text-sky-600 font-semibold">teknologi digital</span> dan membangun <span className="text-sky-600 font-semibold">ekosistem ekonomi sirkular</span> yang menghubungkan warga, komunitas lokal, dan industri daur ulang. Kami berkomitmen memberikan <span className="text-sky-600 font-semibold">insentif nyata</span> dan <span className="text-sky-600 font-semibold">transparan</span> untuk kontribusi masyarakat dalam penyetoran botol plastik, serta mendukung <span className="text-sky-600 font-semibold">pengurangan limbah plastik</span> dan peningkatan <span className="font-semibold text-gray-700">ekonomi hijau</span> di kota Semarang.
            </p>
          </div>

          {/* Tombol CTA */}
          <div className="pt-2 w-full">
            <a 
              href="#" 
              className="block w-full md:inline-block md:w-auto text-center bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 md:py-3.5 rounded-xl shadow-sm transition-all hover:scale-105 text-sm md:text-base"
            >
              Gabung menjadi Mitra
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}