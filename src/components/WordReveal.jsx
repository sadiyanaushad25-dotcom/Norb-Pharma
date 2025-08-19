import { motion } from "framer-motion";

export default function WordReveal({
  text,
  type = "wave",
  delay = 0.05,
  as: Tag = "span", 
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
        transition: { delay: i * delay, duration: 1, ease: "easeOut" }
      }),
    },
    waterfall: {
      hidden: { y: "-100%", opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * delay, duration: 0.8, ease: "easeOut" }
      }),
    },
    reverse: {
      hidden: { y: "100%", opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * delay, duration: 0.8, ease: "easeOut" }
      }),
    }
  };

  const selectedVariant = variantsMap[type] || variantsMap.wave;

return (
  <Tag className={className} style={{ display: "inline-block", ...style }}>
    {text.split(" ").map((word, wi) => (
      <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        {word.split("").map((char, ci) => (
          <motion.span
            key={ci}
            style={{ display: "inline-block", overflow: "hidden" }}
            custom={ci}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={selectedVariant}
          >
            {char}
          </motion.span>
        ))}
        {/* Add a space after each word */}
        <span style={{ display: "inline-block", width: "0.25em" }} />
      </span>
    ))}
  </Tag>
);
}
