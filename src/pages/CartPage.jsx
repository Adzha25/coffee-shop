import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <MainLayout>
        <Cart />
      </MainLayout>
    </motion.div>
  );
};

export default CartPage;
