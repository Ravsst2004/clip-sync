import { motion } from "framer-motion";

const Button = ({ children, className, ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.7 }}
      whileHover={{ scale: 1.1, opacity: 0.8 }}
      {...props}
      className={`p-4 px-8 rounded-full shadow-lg duration-200 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
