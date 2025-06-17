import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import About from "../components/About";
import StorySection from "../components/StorySection";
import VisionMissionSection from "../components/VisionMissionSection";
import TeamSection from "../components/TeamSection";
import LocationContactSection from "../components/LocationContactSection";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <MainLayout noPadding>
        <About />
        <StorySection />
        <VisionMissionSection />
        <TeamSection />
        <LocationContactSection />
      </MainLayout>
    </motion.div>
  );
};

export default AboutPage;
