import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Contact from "../components/Contact";

const CartPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <MainLayout noPadding>
        <Contact />
      </MainLayout>
    </motion.div>
  );
};

export default CartPage;