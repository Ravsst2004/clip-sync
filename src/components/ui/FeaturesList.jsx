import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const FeaturesList = ({ title, description }) => {
  const scope = useRef(null);
  const isInView = useInView(scope, { once: false });

  return (
    <motion.div
      ref={scope}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 2 }}
    >
      <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">{title}</h5>
      <p className="max-w-md text-grayishBlue">{description}</p>
    </motion.div>
  );
};

export default FeaturesList;
