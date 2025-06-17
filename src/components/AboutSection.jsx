import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section className="bg-white h-screen w-full flex items-center justify-center py-20 px-6 text-gray-800">
      <div
        className="max-w-5xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
      >
        <div className="flex justify-center mb-4">
          <Coffee className="w-10 h-10 text-amber-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tentang <span className="text-amber-700">Adzx. Café</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
          Adzx. Café hadir untuk menemani harimu dengan aroma kopi yang menenangkan dan rasa cemilan yang menggoda. 
          Kami percaya bahwa secangkir kopi yang sempurna dan suasana yang nyaman dapat mengubah harimu menjadi lebih baik. 
          Dengan bahan pilihan dan pelayanan hangat, Adzx Café adalah tempat ideal untuk bersantai, bekerja, atau bertemu teman.
        </p>
        <Link
          to="/about"
          className="inline-block bg-amber-700 text-white px-6 py-3 mt-6 rounded-full hover:bg-amber-800 transition duration-300"
        >
          View More
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutSection;
