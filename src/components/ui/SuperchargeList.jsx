/* eslint-disable react/prop-types */
import { useInView, motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const SuperchargeList = ({ title, description, img }) => {
  const scope = useRef(null);
  const isInView = useInView(scope, { once: false });

  const y = useMotionValue(0);

  return (
    <motion.div
      ref={scope}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 2, type: "spring", stiffness: 400 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
      className="flex flex-col items-center space-y-5 cursor-grab"
      style={{ y }}
      drag={true}
      whileTap={{ cursor: "grabbing" }}
    >
      <img
        src={img}
        alt={title}
        className="mb-6"
      />
      <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">{title}</h5>
      <p className="max-w-md text-grayishBlue">{description}</p>
    </motion.div>
  );
};

export default SuperchargeList;
