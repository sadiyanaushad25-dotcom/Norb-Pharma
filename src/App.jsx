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
import { LayoutGroup  } from "framer-motion";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css"
import FloatingIcon from "./components/whatsappIcon";

function App() {
  const { progress, loaded } = useProgress(); // Track DNA loading
  const [ready, setReady] = useState(false);

    useEffect(() => {
    // Preload via JS
    const img = new Image();
    img.src = "/background.jpg";
  }, []);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setReady(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    // <HelmetProvider>
    //   <Helmet>
    //   {/* Core SEO */}
    //   <title>NORB Pharma | Regulatory Compliance for Medical Devices & Pharmaceuticals</title>
    //   <meta name="description" content="NORB Pharma ensures seamless regulatory compliance for medical devices, pharmaceuticals, and scientific office setup in the UAE. With 15+ years of expertise, we guide you from concept to market authorization." />
    //   <meta name="keywords" content="Pharma compliance UAE, medical device registration, EDE approval, drugstore establishment, pharmaceutical services, NORB Pharma" />

    //   {/* Open Graph */}
    //   <meta property="og:title" content="NORB Pharma | Regulatory Compliance Experts" />
    //   <meta property="og:description" content="Empowering healthcare innovation through regulatory excellence. NORB Pharma delivers successful product registration & compliance in the UAE." />
    //   <meta property="og:type" content="website" />
    //   <meta property="og:url" content="https://norb-pharma-l77j.vercel.app/" />
    //   <meta property="og:image" content="https://norb-pharma-l77j.vercel.app/logo.png" />

    //   {/* Twitter Cards */}
    //   <meta name="twitter:card" content="summary_large_image" />
    //   <meta name="twitter:title" content="NORB Pharma | Seamless Regulatory Compliance" />
    //   <meta name="twitter:description" content="Trusted partner for regulatory success in medical devices & pharmaceuticals." />
    //   <meta name="twitter:image" content="https://norb-pharma-l77j.vercel.app/logo.png" />

    //   {/* Canonical */}
    //   <link rel="canonical" href="https://norb-pharma-l77j.vercel.app/" />
    //   </Helmet>

    <LayoutGroup >
    <div>
      {/* Loading Page */}
      <LoadingPage progress={progress} isDone={ready} />

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
    <FloatingIcon />
    </LayoutGroup >
    // </HelmetProvider>
  );
}

export default App;
