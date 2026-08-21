import { motion } from 'framer-motion';

export default function HeroSection({ imageSrc }) {
  return (
    <section id="hero" className="scroll-mt-20 min-h-screen pt-28 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        
        <div className="max-md:contents space-y-6 text-left">
          {/* Animasi Teks */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-md:order-1"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Setiap Botol Yang Anda <span className="text-sky-600">Jual</span> Membantu <span className="text-sky-600">Mengurangi</span> Limbah plastik Di Bumi
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Kami menyediakan layanan untuk penjualan botol plastik, memastikan setiap transaksi anda berkontribusi langsung pada pengurangan limbah plastik di Bumi.
            </p>
          </motion.div>

          {/* Animasi Tombol */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-md:order-3 max-md:w-full"
          >
            <a 
              href="#" 
              className="block w-full md:inline-block md:w-auto text-center bg-sky-600 hover:bg-sky-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
            >
              Gabung Jadi Mitra
            </a>
          </motion.div>
        </div>

        {/* Animasi Gambar (Ukuran diperkecil khusus mode HP) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end my-2 md:my-0 max-md:order-2"
        >
          <img 
            src={imageSrc} 
            alt="Ilustrasi Botol Plastik" 
            className="w-48 sm:w-60 md:w-full max-w-[220px] sm:max-w-xs md:max-w-lg h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}