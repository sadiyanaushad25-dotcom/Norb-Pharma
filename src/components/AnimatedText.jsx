// import { motion } from "framer-motion";

// export default function AnimatedText({ children }) {
//   return (
//     <motion.div
//       initial={{ y: 100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{
//         type: "spring",
//         stiffness: 120,
//         damping: 10
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

export default function AnimatedText({ id, children }) {
  return (
    <section
      id={id}
      style={{ display: "flex",alignItems: "center", justifyContent: "flex-start", color: "white", textAlign: "center" }}
      // , 
    >
      {/* <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      > */}
          <motion.div
      initial={{ y: 50, scale: 0.8, opacity: 0 }}
      animate={{ y: 0, scale: [1.2, 1], opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ display: 'inline-block' }}
    >
        {children}
      </motion.div>
    </section>
  );
}
