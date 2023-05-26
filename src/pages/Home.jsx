import Hero from "../components/Hero";
import Navbar from "../components/UI/Navbar";
import AboutMe from "../components/AboutMe";
import Clients from "../components/UI/Clients";
import Works from "../components/Works";
import Footer from "../components/UI/Footer";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
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
