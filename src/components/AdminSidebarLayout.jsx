// ==== components/AdminSidebarLayout.jsx ====
import React, { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/admin/dashboard', label: 'Dashboard' },
  { path: '/admin/orders', label: 'Pesanan' },
];

const AdminSidebarLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) navigate('/admin/login');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow h-screen p-4">
        <h2 className="text-xl font-bold mb-6 text-amber-600">Admin Panel</h2>
        <nav className="space-y-2">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded text-gray-700 hover:bg-blue-100 ${location.pathname === item.path ? 'bg-blue-100 font-semibold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminSidebarLayout;
