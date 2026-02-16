import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import WordReveal from '../components/WordReveal';

import "./Home.css";
import { hero_heading, landing_page_3, landing_page_4 } from "../constants/keywords";

export default function Home() {

  return (
    <div className="landing-container">

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
        type="waterfall"
        delay={0.1}
      />
      </motion.h1>
      <p className="hero-tagline">{landing_page_3}</p>

      {/* Divider animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="divider"
      />

      {/* Button */}
      <motion.button
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        style={{ fontSize: "1.1rem", fontWeight: "600" }}
        className="cta-btn"
      >
        {landing_page_4}
      </motion.button>
    </div>
  );
}