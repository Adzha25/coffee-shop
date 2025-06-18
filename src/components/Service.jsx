import { motion } from "framer-motion";
import { Coffee, HeartHandshake, Smile, Users } from "lucide-react";

const services = [
  {
    icon: <Coffee className="text-brown-700 w-10 h-10" />,
    title: "Specialty Coffee",
    description:
      "Kami menyajikan kopi terbaik dari biji kopi premium dengan teknik penyajian yang sempurna."
  },
  {
    icon: <Smile className="text-brown-700 w-10 h-10" />,
    title: "Suasana Nyaman",
    description:
      "Ruang yang tenang, aroma kopi, dan desain interior vintage membuat pengalaman bersantai lebih berkesan."
  },
  {
    icon: <HeartHandshake className="text-brown-700 w-10 h-10" />,
    title: "Pelayanan Ramah",
    description:
      "Barista kami siap menyambut Anda dengan senyum dan pelayanan terbaik setiap hari."
  },
  {
    icon: <Users className="text-brown-700 w-10 h-10" />,
    title: "Event & Community",
    description:
      "Kami menyediakan ruang untuk acara komunitas, sharing session, dan gathering dengan atmosfer yang hangat."
  }
];

const Service = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf6ec] via-[#f8e6cf] to-[#f5dbc3] min-h-screen w-full px-6 py-16">
      <div className="z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-amber-600 mb-6"
        >
          Layanan Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Kami menghadirkan berbagai layanan terbaik untuk melengkapi pengalaman Anda di Adzx. Café
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4 text-amber-700 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
