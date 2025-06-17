import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const LocationContactSection = () => {
  return (
    <section className="bg-[#fef8ee] py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-amber-700 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Lokasi & Kontak
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Info Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-800 text-lg"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <MapPin className="text-amber-600 mt-1" />
            <div>
              <h4 className="font-semibold">Alamat</h4>
              <p>Jl. Kopi No. 88, Jakarta</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <Clock className="text-amber-600 mt-1" />
            <div>
              <h4 className="font-semibold">Jam Operasional</h4>
              <p>Setiap Hari, 08.00 - 22.00</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <Phone className="text-amber-600 mt-1" />
            <div>
              <h4 className="font-semibold">Telepon</h4>
              <p>(021) 123-4567</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <Mail className="text-amber-600 mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>contact@adzxcafe.com</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Embed Map */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-64 md:h-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lokasi Adzx Cafe"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationContactSection;
