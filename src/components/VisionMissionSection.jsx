import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="bg-[#fdf6ec] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-amber-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Visi & Misi Kami
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Menyatukan cita rasa, suasana, dan kehangatan dalam setiap sajian.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* VISI */}
        <motion.div
          className="bg-white rounded-xl shadow-xl p-8 border border-amber-100"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-amber-700" size={28} />
            <h3 className="text-2xl font-semibold text-gray-800">Visi</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Menjadi café pilihan utama di hati pelanggan dengan menyajikan pengalaman otentik melalui kualitas rasa, pelayanan ramah, dan suasana yang menyenangkan.
          </p>
        </motion.div>

        {/* MISI */}
        <motion.div
          className="bg-white rounded-xl shadow-xl p-8 border border-amber-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-amber-700" size={28} />
            <h3 className="text-2xl font-semibold text-gray-800">Misi</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Menyajikan produk berkualitas dari bahan terbaik</li>
            <li>Menciptakan atmosfer nyaman & kekinian</li>
            <li>Melayani dengan hati dan senyuman</li>
            <li>Mendukung petani kopi lokal</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
