import logo from '/logo.png';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="brand">
          <span className="logo-line-1">NORB</span>
          <span className="logo-line-2">PHARMA</span>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>
      </div>
      <div className="navbar-links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About Us</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </nav>
  );
}
