import { motion } from "framer-motion";

export default function AnimatedText({ id, children }) {
  return (
    <section
      id={id}
      style={{ display: "flex",alignItems: "center", justifyContent: "flex-start", color: "white", textAlign: "center" }}
    >
        {children}
    </section>
  );
}
