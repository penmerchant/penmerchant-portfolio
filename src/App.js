import Navbar from "./components/Layout";
import AboutSection from "./pages/About";
import HeroSection from "./pages/HeroSection";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Projects />
    </>
  );
}

export default App;
