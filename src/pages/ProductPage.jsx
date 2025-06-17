import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Product from "../components/Product";
import CoffeeBeanSection from "../components/CoffeeBeanSection";
import FeaturedMenuSection from "../components/FeaturedMenuSection";

const ProductPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <MainLayout noPadding>
        <Product />
        <CoffeeBeanSection />
        <FeaturedMenuSection />
      </MainLayout>
    </motion.div>
  );
};

export default ProductPage;