import React from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

const Product = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf6ec] via-[#f8e6cf] to-[#f5dbc3] py-20 px-6">
      {/* Background Blur Circle */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-200 opacity-30 rounded-full blur-3xl z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Temukan Rasa <span className="text-amber-700">Autentik</span><br />
            di Setiap Sajian Kami
          </h2>
          <p className="text-gray-700 mt-6 text-lg max-w-md leading-relaxed">
            Kami percaya bahwa setiap tegukan kopi adalah pengalaman — dibuat dari bahan pilihan dan disajikan dengan sepenuh hati.
          </p>

          <motion.a
            href="/menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-amber-800 transition"
          >
            <Coffee size={20} /> Lihat Menu
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 grid grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Gambar 1 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/icedcoffee.png"
              alt="Iced Coffee"
              className="w-80 rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Gambar 2 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <img
              src="/images/caramelpopcorn.png"
              alt="Hot Coffee"
              className="w-80 rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
