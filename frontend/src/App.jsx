import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

import ProjectDetails from "./pages/ProjectDetails";
import ContributorProfile from "./pages/ContributorProfile";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#062E57] min-h-screen text-white font-sans scroll-smooth">
        <Navbar />

        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Project details */}
          <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

          {/* Contributor profile */}
          <Route
            path="/contributors/:slug"
            element={<ContributorProfile />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}