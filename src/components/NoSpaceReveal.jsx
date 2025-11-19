import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function NoSpaceReveal({
  text,
  type = "wave",
  delay = 0,
  as: Tag = "span",
  className = "",
  style = {}
}) {
  const variantsMap = {
    reverse: {
      hidden: { y: "100%", opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * delay, duration: 0.4, ease: "easeOut" }
      }),
    }
  };

  const selectedVariant = variantsMap[type] || variantsMap.reverse;
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const words = text.split(/(\s+)/);
  return (
    <Tag className={className} style={{ display: "inline-block", willChange: "transform, opacity", ...style }}>
      {words.map((char, i) => {
        if (/^\s+$/.test(char)) return char;
        return (
          <motion.span
            ref={ref}
            key={i}
            style={{ display: "inline-block", overflow: "hidden" }}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            viewport={{ once: true, amount: 0.5 }}
            variants={selectedVariant}
          >
            {char}
          </motion.span>
        )
      })}
    </Tag>
  );
}
