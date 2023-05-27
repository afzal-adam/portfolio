import Hero from "../components/Hero";
import Navbar from "../components/UI/Navbar";
import AboutMe from "../components/AboutMe";
import Clients from "../components/UI/Clients";
import Works from "../components/Works";
import Footer from "../components/UI/Footer";
import Gallery from "../components/Gallery";
import { motion, useScroll, useSpring } from "framer-motion";

import "../styles/MotionStyles.css";
import "../styles/index.css";
const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar bg-primary" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <AboutMe />
      <Clients />
      <Works />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
