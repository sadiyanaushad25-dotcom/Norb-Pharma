// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Background3D from "./components/Background3D";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//       <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//         {/* 3D Background */}
//         <Background3D />  
//         {/* <Navbar /> */}
//         {/* Page Content */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
import Background3D from "./components/Background3D";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import useSnapScroll from "./Hooks/useSnapScroll";
import useSnapScrollById from "./Hooks/useSnapScroll";
import AnimatedSection from "./components/AnimatedSection";

function App() {
    // useSnapScroll(4); // total sections
      const sectionIds = ["home", "about", "services", "contact"];
  useSnapScrollById(sectionIds);

  return (
    <div style={{ height: "100%", overflowX: "hidden", }}>
      {/* 3D Background */}
      <Background3D />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <AnimatedSection id="home"><Home /></AnimatedSection>
      {/*<AnimatedSection id="about"><About /></AnimatedSection> */}
      {/* <AnimatedSection id="services"><Services /></AnimatedSection> */}
      {/* <AnimatedSection id="contact"><Contact /></AnimatedSection> */}
      {/* <Home />
      <About />
      <Services />
      <Contact /> */}
    </div>
  );
}

export default App;
