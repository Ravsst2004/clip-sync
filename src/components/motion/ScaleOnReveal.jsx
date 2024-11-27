import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScaleOnReveal = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mainTextOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const mainTextScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.3]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: mainTextOpacity, scale: mainTextScale }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleOnReveal;
