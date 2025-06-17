import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import CheckoutForm from "../components/CheckoutForm";

const CheckoutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <MainLayout>
        <CheckoutForm />
      </MainLayout>
    </motion.div>
  );
};

export default CheckoutPage;
