import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ikon hamburger dan close
import { motion, AnimatePresence } from "framer-motion";

const TransparentNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled
    ? "bg-white shadow-md text-gray-800"
    : "bg-white/10 backdrop-blur-sm text-white";

const menuVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">☕ Adzx. Café</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#" className="hover:text-amber-500">Home</a></li>
          <li><Link to="/about" className="hover:text-amber-500">About Us</Link></li>
          <li><Link to="/service" className="hover:text-amber-500">Service</Link></li>
          <li><Link to="/menu" className="hover:text-amber-500">Menu</Link></li>
          <li><Link to="/product" className="hover:text-amber-500">Product</Link></li>
          <li><a href="#contact" className="hover:text-amber-500">Contact Us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`md:hidden px-4 pb-4 pt-2 ${scrolled ? "bg-white text-gray-800" : "bg-white/10 backdrop-blur-sm text-white"}`}>
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="show"
            className="space-y-3 font-medium"
          >
            <motion.li variants={itemVariants}><a href="#" className="block">Home</a></motion.li>
            <motion.li variants={itemVariants}><Link to="/about" className="block">About Us</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/service" className="block">Service</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/menu" className="block">Menu</Link></motion.li>
            <motion.li variants={itemVariants}><Link to="/product" className="block">Product</Link></motion.li>
            <motion.li variants={itemVariants}><a href="#contact" className="block">Contact Us</a></motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
    </nav>
  );
};

export default TransparentNavbar;
