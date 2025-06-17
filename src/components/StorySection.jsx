import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="bg-gradient-to-br from-[#fdf6ec] via-[#f6e7d4] to-[#f6e0cc] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Gambar */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/coffeebar.jpeg" // atau gambar lain suasana café
            alt="Cerita Kami"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Teks */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-amber-700 mb-4">Cerita Kami</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Adzx Café berawal dari mimpi sederhana: menciptakan ruang nyaman untuk menikmati kopi terbaik. Kami percaya bahwa secangkir kopi bukan sekadar minuman, tapi juga cerita, kenangan, dan momen hangat yang dibagikan bersama.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Dengan sentuhan cita rasa lokal dan suasana homey, kami hadir sebagai tempat hangout yang menyatukan rasa, tawa, dan inspirasi. Setiap kopi kami diseduh dengan cinta dan komitmen pada kualitas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
