// import { motion } from "framer-motion";

// export default function TextReveal({ text, type = "wave", delay = 0.05, style = {} }) {
//   // Variants for each animation type
//   const variantsMap = {
//     wave: {
//       hidden: { y: "100%", opacity: 0 },
//       visible: (i) => ({
//         y: [0, -5, 0], // up, slightly above, then settle
//         opacity: 1,
//         transition: { delay: i * delay, duration: 0.5, ease: "easeOut" }
//       }),
//     },
//     waterfall: {
//       hidden: { y: "-100%", opacity: 0 },
//       visible: (i) => ({
//         y: 0,
//         opacity: 1,
//         transition: { delay: i * delay, duration: 0.4, ease: "easeOut" }
//       }),
//     },
//     reverse: {
//       hidden: { y: "100%", opacity: 0 },
//       visible: (i) => ({
//         y: 0,
//         opacity: 1,
//         transition: { delay: i * delay, duration: 0.4, ease: "easeOut" }
//       }),
//     }
//   };

//   const selectedVariant = variantsMap[type] || variantsMap.wave;

//   return (
//     <span style={{ display: "inline-block", overflow: "hidden", ...style }}>
//       {text.split("").map((char, i) => (
//         <motion.span
//           key={i}
//           style={{ display: "inline-block" }}
//           custom={i}
//           initial="hidden"
//           animate="visible"
//           variants={selectedVariant}
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </span>
//   );
// }

import { motion } from "framer-motion";

export default function TextReveal({
  text,
  type = "wave",
  delay = 0.05,
  as: Tag = "span", // element type (default span)
  className = "",
  style = {}
}) {
  // Animation variants
  const variantsMap = {
    wave: {
      hidden: { y: "100%", opacity: 0 },
      visible: (i) => ({
        y: [0, -8, 0],
        opacity: 1,
        transition: { delay: i * delay, duration: 0.5, ease: "easeOut" }
      }),
    },
    waterfall: {
      hidden: { y: "-100%", opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * delay, duration: 0.4, ease: "easeOut" }
      }),
    },
    reverse: {
      hidden: { y: "100%", opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * delay, duration: 0.4, ease: "easeOut" }
      }),
    }
  };

  const selectedVariant = variantsMap[type] || variantsMap.wave;

  return (
    <Tag className={className} style={{ display: "inline-block", ...style }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", overflow: "hidden" }}
          custom={i}
          initial="hidden"
        //   animate="visible"
                  whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={selectedVariant}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}
