import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 }, // smaller and slightly lower
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0.5,
    scale: 0.7,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const AnimatedSection = ({ children, id }) => {
  const [ref, inView] = useInView({
    rootMargin: "-50% 0px -50% 0px", // trigger near center
    triggerOnce: false,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "exit"}
      style={{
        // minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3rem",
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
