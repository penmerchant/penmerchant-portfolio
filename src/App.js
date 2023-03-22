import Footer from "./components/Footer";
import Navbar from "./components/Layout";
import AboutSection from "./pages/About";
import Contact from "./pages/Contact";
import HeroSection from "./pages/HeroSection";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
