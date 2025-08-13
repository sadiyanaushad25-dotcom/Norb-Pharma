import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { y: -50, opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

const AnimatedSection = ({ children, id }) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // 50% of section visible to trigger
    triggerOnce: false,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "exit"}
      style={{ minHeight: '100vh', padding: '2rem' }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
