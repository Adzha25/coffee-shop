import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navLink = "text-gray-800 hover:text-amber-600 font-medium";

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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">☕ Adzx. Café</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu for Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={navLink}>Home</Link>
          <Link to="/about" className={navLink}>About Us</Link>
          <Link to="/menu" className={navLink}>Menu</Link>
          <Link to="/product" className={navLink}>Product</Link>
          <Link to="/service" className={navLink}>Service</Link>
          <Link to="/contact" className={navLink}>Contact Us</Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-amber-600" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Menu for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-gray-800"
            key="mobile-menu"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.li variants={itemVariants}>
              <Link to="/" onClick={() => setIsOpen(false)} className={navLink}>Home</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/about" onClick={() => setIsOpen(false)} className={navLink}>About Us</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/menu" onClick={() => setIsOpen(false)} className={navLink}>Menu</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/product" onClick={() => setIsOpen(false)} className={navLink}>Product</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/service" onClick={() => setIsOpen(false)} className={navLink}>Service</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={navLink}>Contact Us</Link>
            </motion.li>
            <motion.li variants={itemVariants} className="relative">
              <Link to="/cart" onClick={() => setIsOpen(false)} className={navLink}>
                <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-amber-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
