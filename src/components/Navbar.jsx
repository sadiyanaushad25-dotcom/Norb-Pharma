import logo from '/logo.png';
import './Navbar.css';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef(null);

  const scrollToSection = (id) => {
    const navbarHeight = navbarRef.current?.offsetHeight || 0;
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ["home", "about", "services", "contact"];
          const navbarHeight = navbarRef.current?.offsetHeight || 0;

          const current = sections.find((id) => {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              return rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight + 50;
            }
            return false;
          });

          if (current) setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navbarRef} className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="brand">
          <span className="logo-line-1">NORB</span>
          <span className="logo-line-2">PHARMA</span>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </div>

      <div className="navbar-links">
        {["home", "about", "services", "contact"].map((id) => (
          <button
            key={id}
            className={activeSection === id ? "active" : ""}
            onClick={() => scrollToSection(id)}
          >
            {id === "about" ? "About Us" : id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}
