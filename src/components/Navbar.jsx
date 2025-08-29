import logo from '/logo.png';
import { motion } from "framer-motion";
import './Navbar.css';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef(null);
  const sectionOffsets = useRef({});

  const sections = ["home", "about", "services", "contact"];

  const updateOffsets = () => {
    const offsets = {};
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        offsets[id] = {
          top: el.offsetTop,
          bottom: el.offsetTop + el.offsetHeight,
        };
      }
    });
    sectionOffsets.current = offsets;
  };

  const scrollToSection = (id) => {
    const navbarHeight = navbarRef.current?.offsetHeight || 0;
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.offsetTop - navbarHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    updateOffsets();
    // window.addEventListener("resize", updateOffsets);
    window.addEventListener("load", updateOffsets);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const navbarHeight = navbarRef.current?.offsetHeight || 0;
          const scrollPos = window.scrollY + navbarHeight + 50;

          const current = sections.find((id) => {
            const range = sectionOffsets.current[id];
            if (!range) return false;
            return scrollPos >= range.top && scrollPos <= range.bottom;
          });

          if (current) setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("resize", updateOffsets);
      window.removeEventListener("load", updateOffsets);
    };
  }, []);

  return (
    <nav ref={navbarRef} className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-left">
        <motion.img src={logo} alt="Logo" layoutId="app-logo" className="logo" />
        <div className="brand">
          <span className="logo-line-1">NORB</span>
          <span className="logo-line-2">PHARMA</span>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      <div className="navbar-links">
        {sections.map((id) => (
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
