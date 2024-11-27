import { useInView, motion, color } from "framer-motion";
import { useRef } from "react";

const FeaturesList = ({ title, description }) => {
  const scope = useRef(null);
  const isInView = useInView(scope, { once: true });

  return (
    <motion.div
      ref={scope}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 300,
        scale: isInView ? 1 : 1.1,
      }}
      whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
      transition={{ duration: 2 }}
    >
      <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">{title}</h5>
      <p className="max-w-md text-grayishBlue">{description}</p>
    </motion.div>
  );
};

export default FeaturesList;
