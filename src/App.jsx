import Navbar from "./components/Navbar";
import Background3D from "./components/Background3D";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LoadingPage from "./pages/LoadingPage";
import AnimatedSection from "./components/AnimatedSection";
import "./App.css"
import { useEffect, useState } from "react";
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
  setLoading(false);
  }, 2500);


  return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {/* 3D Background */}
      <Background3D />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section className="responsive-section">
      <AnimatedSection id="home"><Home /></AnimatedSection>
      <AnimatedSection id="about"><About /></AnimatedSection>
      <AnimatedSection id="services"><Services /></AnimatedSection>
      <AnimatedSection id="contact"><Contact /></AnimatedSection>
      </section>
    </div>
  );
}

export default App;
