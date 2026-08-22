import { useState, useEffect, useRef } from "react";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);
  const toggleRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside to close
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!mobileOpen) return;
      if (mobileRef.current?.contains(e.target)) return;
      if (toggleRef.current?.contains(e.target)) return;
      setMobileOpen(false);
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [mobileOpen]);

  // Close automatically if resized to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setMobileOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-transparent text-white px-6 md:px-10">
      <div className="flex-1">
        <a href="#home">
          <img src="/TAVDEV.png" alt="TAVDEV Logo" className="h-16 w-auto" />
        </a>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
              
                href={"#" + item.toLowerCase()}
                className="hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger toggle — mobile only */}
      <button
        ref={toggleRef}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((p) => !p)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 h-8 w-8 z-50"
      >
        <span className={"block h-0.5 w-6 bg-white transition-transform duration-300 " + (mobileOpen ? "rotate-45 translate-y-2" : "")} />
        <span className={"block h-0.5 w-6 bg-white transition-opacity duration-300 " + (mobileOpen ? "opacity-0" : "")} />
        <span className={"block h-0.5 w-6 bg-white transition-transform duration-300 " + (mobileOpen ? "-rotate-45 -translate-y-2" : "")} />
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          ref={mobileRef}
          className="md:hidden absolute top-full left-0 right-0 bg-neutral/95 backdrop-blur text-white shadow-lg"
        >
          <ul className="menu px-6 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={"#" + item.toLowerCase()}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 hover:text-primary transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}