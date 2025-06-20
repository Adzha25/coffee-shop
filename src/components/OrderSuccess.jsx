import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf3] px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-[#7b4c2f]">Pesanan Berhasil!</h2>
        <p className="text-gray-600 mb-6">
          Terima kasih sudah memesan di <strong>Adzx. Café</strong> ☕. Tim kami akan segera menghubungi Anda untuk konfirmasi.
        </p>

        <Link
          to="/menu"
          className="inline-block bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition duration-300"
        >
          Kembali ke Menu
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
