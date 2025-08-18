import Navbar from "./components/Navbar";
import Background3D from "./components/Background3D";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AnimatedSection from "./components/AnimatedSection";

function App() {

  return (
    <div>
      {/* 3D Background */}
      <Background3D />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      {/* <section 
      style={{
        marginTop:"2rem", 
        zIndex:"2",
        // backgroundColor:"pink", 
        display:"flex",
        flexDirection:"column",
        justifyContent:"center", 
        alignItems:"flex-start",
        position:"sticky",
        top:"1.7rem",
      }}> */}
      <AnimatedSection id="home"><Home /></AnimatedSection>
      <AnimatedSection id="about"><About /></AnimatedSection>
      <AnimatedSection id="services"><Services /></AnimatedSection>
      <AnimatedSection id="contact"><Contact /></AnimatedSection>
      {/* </section> */}
    </div>
  );
}

export default App;
