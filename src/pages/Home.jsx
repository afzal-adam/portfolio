import Hero from "../components/Hero";
import Navbar from "../components/UI/Navbar";
import AboutMe from "../components/AboutMe";
import Clients from "../components/UI/Clients";
import Works from "../components/Works";
import Footer from "../components/UI/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Clients />
      <Works />
      <Footer />
    </>
  );
};

export default Home;
