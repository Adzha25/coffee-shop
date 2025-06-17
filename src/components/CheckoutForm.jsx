import React, { useState } from "react";

const CheckoutForm = () => {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    alamat: "",
    metodePembayaran: "tunai",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pemesanan:", form);
    alert("Pesanan berhasil dikirim!");
    // Reset form atau redirect bisa ditambahkan di sini
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-amber-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-amber-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Alamat Pengiriman</label>
          <textarea
            name="alamat"
            value={form.alamat}
            onChange={handleChange}
            rows={3}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-amber-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Metode Pembayaran</label>
          <select
            name="metodePembayaran"
            value={form.metodePembayaran}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-amber-500"
          >
            <option value="tunai">Tunai</option>
            <option value="qris">QRIS</option>
            <option value="transfer">Transfer Bank</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Konfirmasi Pesanan
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
