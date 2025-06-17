import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Adzha",
    role: "Founder & Owner",
    image: "/images/adzhafoto.jpg",
  },
  {
    name: "Feizal",
    role: "Head Barista",
    image: "/images/feizalfoto.jpg",
  },
  {
    name: "Dimas",
    role: "Customer Service",
    image: "/images/dimasfoto.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#fffaf5] py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-amber-700 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tim Kami
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-amber-300 hover:ring-2 hover:ring-amber-500 transition duration-300"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-amber-100"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
