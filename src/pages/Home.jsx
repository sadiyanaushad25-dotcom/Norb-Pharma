import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import WordReveal from '../components/WordReveal';

import "./Home.css";
import { hero_heading, landing_page_2, landing_page_3, landing_page_4 } from "../constants/keywords";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="landing-container">
      {/* Background Animated Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [0.6, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="circle-bg"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-heading"
      >
        <WordReveal
        as="p"
        text={hero_heading}
        type="wave"
        delay={0.04}
      />
      </motion.h1>
      <p className="hero-tagline">{landing_page_3}</p>

      {/* Divider animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="divider"
      />

      {/* Button */}
      <motion.button
        initial={{ x: "-100vw", opacity: 0 }} // start offscreen left
        animate={{ x: 0, opacity: 1 }}        // move to normal position
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        style={{ fontSize: "1.5rem", fontWeight: "700" }}
        className="cta-btn"
      >
        {landing_page_4}
      </motion.button>

      {/* Floating particles background */}
      {mounted && Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className={`particle ${i % 2 === 0 ? "light" : "gold"}`}
          initial={{ opacity: 0, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            opacity: [0, 1, 0],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight - 200],
          }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
        />
      ))}
    </div>
  );
}