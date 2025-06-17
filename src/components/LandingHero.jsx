import { motion } from "framer-motion";

const LandingHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background blur image */}
      <img
        src="/public/images/AdzxCF1.jpg"
        alt="Hero"
        className="absolute w-full h-full object-cover scale-100 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Konten teks */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Selamat Datang di <span className="text-amber-500">Adzx. Café</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Nikmati kopi terbaik dan cemilan lezat setiap hari ☕ 🍰
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingHero;
