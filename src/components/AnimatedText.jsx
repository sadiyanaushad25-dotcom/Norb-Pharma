import { motion } from "framer-motion";

export default function AnimatedText({ id, children }) {
  return (
    <section
      id={id}
      style={{ display: "flex",alignItems: "center", justifyContent: "flex-start", color: "white", textAlign: "center" }}
    >
      <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: [1.2, 1], opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
        {children}
      </motion.div>
    </section>
  );
}
