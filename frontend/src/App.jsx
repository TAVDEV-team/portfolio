import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <div className="bg-[#062E57] min-h-screen text-white font-sans scroll-smooth">
      <Navbar />
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
