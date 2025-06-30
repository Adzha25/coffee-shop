import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginAdmin from './pages/LoginAdmin';
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./components/OrderSuccess";
import AdminOrders from "./pages/AdminOrders";
import AdminDashboard from './pages/AdminDashboard';
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        {/* Halaman landing tanpa Navbar */}
        <Route path="/" element={<LandingPage />} />

        {/* Halaman lainnya dengan layout utama (Navbar) */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
