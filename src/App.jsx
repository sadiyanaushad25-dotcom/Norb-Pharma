import Navbar from "./components/Navbar";
import Background3D from "./components/Background3D";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LoadingPage from "./pages/LoadingPage";
import AnimatedSection from "./components/AnimatedSection";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import "./App.css"

function App() {
  const { progress, loaded } = useProgress(); // Track DNA loading
  const [ready, setReady] = useState(false);

    useEffect(() => {
    // Preload via JS
    const img = new Image();
    img.src = "/public/engin-akyurt-Ya-IIca3PjM-unsplash.jpg";
  }, []);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setReady(true), 900);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (!ready) {
    return (
      <LoadingPage progress={progress}/>
    );
  }

  return (
    <div>
      {/* 3D Background */}
      <Background3D scroll= {scroll}/>

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
