import logo from '/logo.png';
import './Navbar.css';

export default function Navbar() {
  // const scrollToSection = (id) => {
  // const element = document.getElementById(id);
  //     const offset =  window.innerHeight * 0.1; // height of navbar
  // const y = element.getBoundingClientRect().top + window.scrollY - offset;
  //   document.getElementById(id).scrollIntoView({top:y, behavior: "smooth" });
  // };
const scrollToSection = (id) => {
  const navbarHeight = document.querySelector('.navbar').offsetHeight; // get actual height
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top: y, behavior: "smooth" });
};

  return (
    <nav className={`navbar ${true ? 'show' : ''}`}>
        <div className="navbar-container">
        <div to="/" className="logo-link">
          <img
            src= {logo}
            alt="Logo"
            className={`navbar-logo ${true ? 'logo-small' : ''}`}
            // className={`navbar-logo ${isScrolled ? 'logo-small' : ''}`}
          />
          <div className="logo-name">
            <span className="logo-line-1">NORB</span>
            <span className="logo-line-2">PHARMA</span>
          </div>
        </div>
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
