// components/ServiceTypes.jsx
import { Coffee, CalendarCheck, Users, GraduationCap, Truck } from 'lucide-react';
import 'aos/dist/aos.css';

const services = [
  {
    icon: <CalendarCheck size={32} />,
    title: "Sewa Tempat Event",
    desc: "Tersedia ruangan cozy untuk meeting, komunitas, hingga event privat.",
  },
  {
    icon: <Truck size={32} />,
    title: "Catering & Bulk Order",
    desc: "Layanan pemesanan kopi dan snack dalam jumlah besar untuk kantor atau event.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Kelas Barista",
    desc: "Belajar membuat kopi langsung dari barista profesional kami.",
  },
  {
    icon: <Users size={32} />,
    title: "Konsultasi Coffee Shop",
    desc: "Bantu rancang bisnis coffee shop dengan pengalaman dan insight dari kami.",
  },
  {
    icon: <Coffee size={32} />,
    title: "Private Coffee Tasting",
    desc: "Nikmati pengalaman mencicipi kopi dari berbagai origin secara eksklusif.",
  },
];

export default function ServiceTypes() {
  return (
    <section className="min-h-screen w-full bg-[#fffaf5] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4 text-brown-800 dark:text-amber-600">Layanan Kami</h2>
        <p className="text-lg text-black mb-10 max-w-2xl mx-auto">
          Kami tidak hanya menyajikan kopi terbaik, tapi juga menghadirkan layanan premium yang mendukung kebutuhan acara dan bisnis Anda.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 text-amber-700">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
