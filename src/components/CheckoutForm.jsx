import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CheckoutForm = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      order_items: cartItems.map((item) => ({
        product_id: item.id,
        product_name: item.name,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      })),
      total_price: totalPrice,
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await res.json();

      if (res.ok) {
        clearCart();
        setFormData({
          customer_name: "",
          customer_email: "",
          customer_phone: "",
          notes: "",
        });
        navigate("/order-success");
      } else {
        setMessage("❌ Gagal: " + result.error);
      }
    } catch (err) {
      setMessage("❌ Terjadi error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Form Pemesanan</h2>
      {message && <div className="mb-4 text-center text-sm text-red-500">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="customer_name"
          placeholder="Nama Lengkap"
          value={formData.customer_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          name="customer_email"
          placeholder="Email"
          value={formData.customer_email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="tel"
          name="customer_phone"
          placeholder="Nomor Telepon"
          value={formData.customer_phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <textarea
          name="notes"
          placeholder="Catatan tambahan (opsional)"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition"
        >
          {loading ? "Mengirim..." : "Kirim Pesanan"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
