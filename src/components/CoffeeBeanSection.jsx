import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf } from "lucide-react";

const CoffeeBeanSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const slideVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <section className="bg-[#fdf6ec] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Gambar */}
        <div className="relative w-full md:w-[55%] h-[500px] md:h-[540px] flex items-center justify-start">
          {/* Gambar 1 - tidak ada gap */}
          <motion.img
            src="/images/beanscoffee.png"
            alt="Biji Kopi 1"
            className="h-full w-[65%] object-cover object-left rounded-l-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          {/* Gambar 2 - muncul dulu, lalu rotasi terus-menerus */}
          <motion.img
            ref={ref}
            src="/images/beansonbag.png"
            alt="Biji Kopi 2"
            className="absolute right-0 top-35 -translate-y-1/2 translate-x-[30%] w-[70%] h-[70%] object-cover rounded-full z-10"
            variants={slideVariant}
            initial="hidden"
            animate={controls}
            onAnimationComplete={() => {
              // Mulai efek rotate setelah slide selesai
              controls.start({
                rotate: 360,
                transition: {
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                },
              });
            }}
          />
        </div>

        {/* Teks */}
        <motion.div
          className="w-full md:w-[45%] text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-amber-800 mb-5 flex items-center justify-center md:justify-start gap-2">
            <Leaf className="text-amber-600 w-6 h-6" />
            Biji Kopi Premium
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Di Adzx. Café, setiap cangkir kopi kami dimulai dari biji kopi terbaik yang
            ditanam di dataran tinggi Gayo dan Toraja, Indonesia — dua kawasan penghasil
            kopi paling prestisius di dunia. Dipilih langsung dari petani lokal,
            biji-biji kopi kami disortir secara manual untuk menjamin kualitas tertinggi.
            <br /><br />
            Proses sangrai dilakukan perlahan dan cermat menggunakan metode artisan untuk
            mengeluarkan aroma khas, rasa kompleks, dan aftertaste yang memikat. Inilah
            rahasia di balik rasa kopi kami yang kaya, seimbang, dan menggugah selera —
            sebuah pengalaman rasa yang tak hanya memanjakan lidah, tapi juga menenangkan jiwa.
          </p>
          <a
            href="/menu"
            className="inline-block bg-amber-700 hover:bg-amber-800 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg"
          >
            Pelajari Lebih Lanjut
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffeeBeanSection;
