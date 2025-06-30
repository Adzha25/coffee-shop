import React from "react";
import TransparentNavbar from "../components/TransparentNavbar";
import { motion } from "framer-motion";
import LandingHero from "../components/LandingHero";
import CallToActionSection from "../components/CallToActionSection";
import AboutSection from "../components/AboutSection";


const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <TransparentNavbar />
      <LandingHero />
      <AboutSection />
      <CallToActionSection />
    </motion.div>
  );
};

export default LandingPage;
