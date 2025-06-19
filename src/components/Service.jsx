import { Coffee, Users, GraduationCap, CalendarCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <CalendarCheck size={32} />,
    title: "Sewa Tempat Event",
    desc: "Ruang cozy dan elegan untuk acara privat, komunitas, atau bisnis.",
  },
  {
    icon: <Truck size={32} />,
    title: "Catering Kopi & Snack",
    desc: "Pesan dalam jumlah besar untuk event, kantor, dan momen spesial.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Kelas Barista",
    desc: "Pelatihan langsung dari barista kami, cocok untuk semua level.",
  },
  {
    icon: <Users size={32} />,
    title: "Konsultasi Coffee Shop",
    desc: "Bantuan menyusun konsep dan strategi bisnis kopi dari nol.",
  },
  {
    icon: <Coffee size={32} />,
    title: "Coffee Tasting",
    desc: "Eksplorasi rasa kopi origin pilihan bersama tim Adzx. Café.",
  },
];

const Service = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center text-center px-6 bg-[#f6f1eb]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">
            Layanan Kami
          </h1>
          <p className="text-lg md:text-xl text-[#5c5148] max-w-2xl mx-auto">
            Layanan eksklusif dari Adzx. Café untuk menghadirkan pengalaman terbaik, mulai dari event, edukasi, hingga konsultasi bisnis kopi.
          </p>
        </motion.div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-6 bg-[#fffaf3] relative overflow-hidden">
        <div className="absolute w-32 h-32 bg-[#d8a16f] opacity-10 blur-2xl top-10 left-10 rounded-full" />
        <div className="absolute w-48 h-48 bg-[#e9c6a0] opacity-10 blur-2xl bottom-0 right-0 rounded-full" />

        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-[#fffdf9] border border-[#f0e6db] rounded-3xl p-6 shadow-[0_6px_24px_rgba(216,161,111,0.1)] transition hover:shadow-[0_8px_32px_rgba(216,161,111,0.2)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-[#f4e2d3] w-fit p-3 rounded-xl text-[#d8a16f] mb-4">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#7b4c2f] mb-2">{s.title}</h3>
              <p className="text-[#5c5148] text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#eedac2] to-[#f9ecde] text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-4">
            Tertarik Menggunakan Layanan Kami?
          </h2>
          <p className="mb-6 max-w-xl mx-auto text-[#5c5148]">
            Hubungi kami untuk reservasi tempat, diskusi bisnis kopi, atau bergabung dalam sesi edukasi.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-800 transition duration-300 shadow-md"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Service;
