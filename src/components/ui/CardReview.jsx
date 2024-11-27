import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

export const DesktopCardReview = ({ title, review }) => {
  const cardVariants = {
    initial: { height: 100 },
    animate: { height: 300 },
  };

  const paragraphVariants = {
    initial: { color: "gray" },
    hover: { color: "#00bcd4" },
  };

  return (
    <motion.section
      className="rounded-xl bg-white p-4 mr-4 group"
      variants={cardVariants}
      initial="initial"
      whileHover="animate"
    >
      <div className="w-fit">
        <div className="flex items-center space-x-4">
          <FaUser className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 p-2" />
          <motion.h1 className="font-semibold text-xl">{title}</motion.h1>
        </div>
        <span className="w-full h-[1px] my-4 flex items-center justify-center bg-gray-200 rounded-full" />
        <p className="mt-4 text-start group-hover:text-strongCyan">{review}</p>
      </div>
    </motion.section>
  );
};

export const MobileCardReview = ({ title, review }) => {
  return (
    <section className="rounded-xl bg-white p-4 mr-4">
      <div className="w-fit">
        <div className="flex items-center space-x-4">
          <FaUser className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 p-2" />
          <h1 className="font-semibold text-xl">{title}</h1>
        </div>
        <span className="w-full h-[1px] my-4 flex items-center justify-center bg-gray-200 rounded-full" />
        <p className="mt-4 text-start text-grayishBlue">{review}</p>
      </div>
    </section>
  );
};