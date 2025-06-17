import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import latte from "/public/images/icedlatte.jpg";
import mocha from "/public/images/icedmocha.jpg";
import matcha from "/public/images/icedmatcha.jpg";
import brownsugar from "/public/images/icedbrownsugar.jpg";

const menuItems = [
  {
    title: "Adzx Signature Latte",
    desc: "Espresso + susu organik + karamel ringan yang lembut dan creamy.",
    img: latte,
  },
  {
    title: "Mocha Velvet",
    desc: "Coklat hitam premium + kopi Toraja. Kaya, lembut, dan memikat.",
    img: mocha,
  },
  {
    title: "Matcha Breeze",
    desc: "Matcha Jepang segar + susu dingin. Sejuk, creamy, dan menenangkan.",
    img: matcha,
  },
  {
    title: "Brown Sugar Espresso",
    desc: "Espresso strong + brown sugar + susu segar dalam tampilan cantik.",
    img: brownsugar,
  },
];

const fadeUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function FeaturedMenuSection() {
  return (
    <motion.section
      className="bg-gradient-to-br from-[#fefbf6] via-[#f8e9cd] to-[#f2d8b3] py-20 px-6 md:px-20"
      id="featured-menu"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
          <Star className="text-amber-500 w-6 h-6" />
          <h2 className="text-4xl font-extrabold text-amber-800">Menu Unggulan</h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 text-lg mb-12 max-w-2xl"
        >
          Nikmati racikan kopi terbaik yang telah dipilih secara khusus oleh tim barista kami —
          setiap sajian memiliki cita rasa khas dan kualitas premium.
        </motion.p>

        {/* Grid Menu */}
        <div className="grid gap-10 md:grid-cols-2">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              layout
              className="flex gap-6 items-center bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition will-change-transform"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div variants={fadeUp} className="mt-10 text-center">
          <a
            href="/menu"
            className="bg-amber-700 hover:bg-amber-800 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg"
          >
            Lihat Semua Menu
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
