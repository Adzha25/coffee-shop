import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import AdminLayout from '../components/AdminSidebarLayout';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState({ start: '', end: '' });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    axios.get('http://localhost:5000/api/orders', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      setOrders(res.data);
      setFiltered(res.data);
    })
    .catch(err => {
      console.error('Gagal ambil data:', err);
      if (err.response?.status === 401) {
        alert('Sesi login berakhir, silakan login kembali');
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
    });
  }, []);

  useEffect(() => {
    let data = [...orders];
    if (statusFilter !== 'all') {
      data = data.filter(order => order.order_status === statusFilter);
    }
    if (dateFilter.start && dateFilter.end) {
      const startDate = new Date(dateFilter.start);
      const endDate = new Date(dateFilter.end);
      data = data.filter(order => {
        const orderDate = new Date(order.created_at);
        return orderDate >= startDate && orderDate <= endDate;
      });
    }
    setFiltered(data);
  }, [statusFilter, dateFilter, orders]);

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${id}`, {
        order_status: 'confirmed',
      });
      alert('Status diubah!');
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Gagal ubah status');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`);
      alert('Pesanan dihapus!');
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Gagal hapus');
    }
  };

  const exportToExcel = () => {
    const dataToExport = filtered.map(order => ({
      Nama: order.customer_name,
      Email: order.customer_email,
      Produk: order.order_items.map(i => `${i.product_name} x${i.quantity}`).join(', '),
      Total: order.total_price,
      Status: order.order_status
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Pesanan');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    saveAs(blob, `rekap-pesanan-${new Date().toLocaleDateString('id-ID')}.xlsx`);
  };

  const total = filtered.reduce((sum, o) => sum + o.total_price, 0);

  const now = new Date();
  const daily = filtered
    .filter(o => new Date(o.created_at).toDateString() === now.toDateString())
    .reduce((sum, o) => sum + o.total_price, 0);

  const monthly = filtered
    .filter(o => new Date(o.created_at).getMonth() === now.getMonth() && new Date(o.created_at).getFullYear() === now.getFullYear())
    .reduce((sum, o) => sum + o.total_price, 0);

  const yearly = filtered
    .filter(o => new Date(o.created_at).getFullYear() === now.getFullYear())
    .reduce((sum, o) => sum + o.total_price, 0);

  return (
    <AdminLayout>
      <div className="min-h-screen bg-white py-10 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">📋 Daftar Pesanan</h1>
          <div className="flex gap-3 flex-wrap">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border rounded px-3 py-1 text-sm"
            >
              <option value="all">🔄 Semua Status</option>
              <option value="pending">🕒 Pending</option>
              <option value="confirmed">✅ Confirmed</option>
            </select>
            <input
              type="date"
              value={dateFilter.start}
              onChange={(e) => setDateFilter({ ...dateFilter, start: e.target.value })}
              className="border rounded px-3 py-1 text-sm"
            />
            <input
              type="date"
              value={dateFilter.end}
              onChange={(e) => setDateFilter({ ...dateFilter, end: e.target.value })}
              className="border rounded px-3 py-1 text-sm"
            />
            <button
              onClick={exportToExcel}
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded shadow"
            >
              📤 Export Excel
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-yellow-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">💰 Total Penjualan</h2>
            <p className="text-xl font-bold text-green-700">Rp {total.toLocaleString()}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">📆 Hari Ini</h2>
            <p className="text-xl font-bold text-blue-700">Rp {daily.toLocaleString()}</p>
          </div>
          <div className="bg-purple-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">📅 Bulan Ini / Tahun Ini</h2>
            <p className="text-sm text-gray-600">Bulan: Rp {monthly.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Tahun: Rp {yearly.toLocaleString()}</p>
          </div>
        </div>

        <div className="overflow-x-auto border rounded shadow">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-yellow-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-4">Nama</th>
                <th className="p-4">Produk</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">Tidak ada pesanan</td>
                </tr>
              ) : (
                filtered.map((order, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4">
                      <div className="font-medium">{order.customer_name}</div>
                      <div className="text-xs text-gray-500">{order.customer_email}</div>
                    </td>
                    <td className="p-4">
                      <ul className="list-disc list-inside">
                        {order.order_items.map((item, idx) => (
                          <li key={idx}>{item.product_name} × {item.quantity}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4 font-semibold text-green-600">Rp {order.total_price}</td>
                    <td className="p-4 capitalize">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        order.order_status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {order.order_status}
                      </span>
                    </td>
                    <td className="p-4 space-x-2">
                      <button
                        onClick={() => handleUpdate(order._id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded"
                      >
                        Ubah Status
                      </button>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
