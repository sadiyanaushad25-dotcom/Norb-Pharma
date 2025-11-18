import logo from '/logo.png';
import { motion } from "framer-motion";
import './Navbar.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef(null);
  const sectionOffsets = useRef({});
  // const location = useLocation();

  const sections = ["home", "services", "about", "contact"];

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

  // detect scroll & update activeSection
  useEffect(() => {
    updateOffsets();
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

          if (current) {
            setActiveSection(current);

          //   // push URL without reloading
          //   const newPath = current === 'home' ? '/' : `/${current}`;
          //   if (window.location.pathname !== newPath) {
          //     window.history.replaceState({}, '', newPath);
          //   }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", updateOffsets);
    };
  }, []);

  // 🔹 Whenever the URL changes, scroll to the section
  // useEffect(() => {
  //   const path = location.pathname.replace('/', '') || 'home';
  //   scrollToSection(path);
  // }, [location]);

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
        {sections.map((id) => {
          const path = id === 'home' ? '/' : `/${id}`;
          return (
            <Link
              key={id}
              to={path}
              className={activeSection === id ? "active link" : "link"}
              onClick={(e) => {
                e.preventDefault();
                // window.history.pushState({}, '', path);
                scrollToSection(id);
              }}
            >
              {id === "about" ? "About Us" : id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
