import { motion } from "framer-motion";
import { useRef, useState } from "react";

const FooterSocialIcon = ({ src, alt }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;

    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };
  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <motion.img
        animate={{ x, y }}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        src={src}
        alt={alt}
        className="duration-200 ficon"
        style={{ x: position.x, y: position.y }}
      />
    </motion.div>
  );
};

const FooterSocialIcons = () => {
  const socialIcons = [
    { src: "images/icon-facebook.svg", alt: "" },
    { src: "images/icon-twitter.svg", alt: "" },
    { src: "images/icon-instagram.svg", alt: "" },
  ];

  return (
    <div className="flex justify-between w-32 py-1">
      {socialIcons.map(({ src, alt }) => (
        <a
          href="#"
          key={alt}
        >
          <FooterSocialIcon
            src={src}
            alt={alt}
          />
        </a>
      ))}
    </div>
  );
};

export default FooterSocialIcons;
