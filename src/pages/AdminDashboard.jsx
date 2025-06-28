// ==== pages/AdminDashboard.jsx ====
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebarLayout from '../components/AdminSidebarLayout';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [dailySales, setDailySales] = useState([]);
  const COLORS = ['#FFB347', '#90EE90'];

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/orders`, headers)
      .then(res => {
        setOrders(res.data);
        processSalesData(res.data);
      });

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`, headers)
      .then(res => setProducts(res.data));
  }, []);

  const processSalesData = (orders) => {
    const daily = {};
    orders.forEach(order => {
      const date = new Date(order.created_at).toLocaleDateString('id-ID');
      daily[date] = (daily[date] || 0) + order.total_price;
    });
    const formatted = Object.entries(daily).map(([date, total]) => ({ date, total }));
    setDailySales(formatted);
  };

  const today = new Date().toLocaleDateString('id-ID');
  const todaySales = orders
    .filter(o => new Date(o.created_at).toLocaleDateString('id-ID') === today)
    .reduce((sum, o) => sum + o.total_price, 0);

  const statusCount = orders.reduce((acc, o) => {
    acc[o.order_status] = (acc[o.order_status] || 0) + 1;
    return acc;
  }, {});

  const pieData = [
    { name: 'Pending', value: statusCount['pending'] || 0 },
    { name: 'Confirmed', value: statusCount['confirmed'] || 0 }
  ];

  return (
    <AdminSidebarLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">Total Produk</h2>
          <p className="text-2xl font-bold text-blue-600">{products.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">Total Pesanan</h2>
          <p className="text-2xl font-bold text-yellow-600">{orders.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">Penjualan Hari Ini</h2>
          <p className="text-2xl font-bold text-green-600">Rp {todaySales.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">📈 Penjualan Harian</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">📊 Status Pesanan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AdminSidebarLayout>
  );
};

export default AdminDashboard;
