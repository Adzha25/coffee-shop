import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-0 mt-0">
        <img
            src="/images/aboutimage.jpg"
            alt="Tentang Kami"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/40 z-10" />

        <motion.div
            className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Tentang <span className="text-amber-500">Adzx. Café</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Lebih dari sekadar kopi. Kami hadir untuk memberikan pengalaman yang hangat, personal, dan penuh cita rasa.
            </p>
        </motion.div>
    </section>
  );
};

export default About;
