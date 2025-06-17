import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Menu from "../components/Menu";

const MenuPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <MainLayout>
        <Menu />
      </MainLayout>
    </motion.div>
  );
};

export default MenuPage;
