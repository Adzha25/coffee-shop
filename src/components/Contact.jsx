import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-[#fdf6ec] via-[#fbe5c8] to-[#f5d0a1] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-amber-300 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber-500 rounded-full blur-3xl opacity-10 animate-ping" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4 drop-shadow-sm">Hubungi Kami</h2>
          <p className="text-gray-700 text-lg">
            Tim kami siap melayani pertanyaan, reservasi, atau kerja sama dengan hangat dan cepat.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-amber-100 space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-amber-700">Nama</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring focus:ring-amber-200 text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-amber-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring focus:ring-amber-200 text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-amber-700">Pesan</label>
              <textarea
                rows="4"
                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring focus:ring-amber-200 text-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-700 text-white font-semibold py-3 rounded-full hover:bg-amber-800 transition duration-300 shadow-md"
            >
              Kirim Pesan
            </button>
          </motion.form>

          {/* Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Alamat */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-xl">
                <MapPin className="text-amber-700" />
              </div>
              <div>
                <h4 className="font-semibold text-[#3e2723]">Alamat</h4>
                <p className="text-gray-700">Jl. Aroma Kopi No.1, Bandung, Indonesia</p>
              </div>
            </div>

            {/* Telepon */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-xl">
                <Phone className="text-amber-700" />
              </div>
              <div>
                <h4 className="font-semibold text-[#3e2723]">Telepon</h4>
                <p className="text-gray-700">+62 812-3456-7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-xl">
                <Mail className="text-amber-700" />
              </div>
              <div>
                <h4 className="font-semibold text-[#3e2723]">Email</h4>
                <p className="text-gray-700">info@adzxcafe.com</p>
              </div>
            </div>

            {/* Maps */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Bandung&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-52 border-none"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
