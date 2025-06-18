import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Service from "../components/Service";
import ServiceTypes from "../components/ServiceType";

const ServicePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <MainLayout noPadding>
        <Service />
        <ServiceTypes />
      </MainLayout>
    </motion.div>
  );
};

export default ServicePage;