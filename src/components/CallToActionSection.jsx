import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <motion.section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <img src="/public/images/bgcall.jpg" alt="Call" className="absolute w-full h-full object-cover scale-101 z-0" />
        <div
          className="z-10 text-center max-w-xl"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <h2 className="text-3xl md:text-5x2 font-bold mb-4 text-black">
            Siap Menemukan Rasa Favoritmu?
          </h2>
          <p className="text-lg text-black mb-6">
            Jelajahi menu terbaik kami dan nikmati pengalaman ngopi yang tak terlupakan.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition duration-300"
            >
            Explore Menu
          </Link>
        </div>
    </motion.section>
  );
};

export default CallToActionSection;
