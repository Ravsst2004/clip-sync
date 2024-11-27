import { motion } from "framer-motion";

const FooterSocialIcon = ({ src, alt }) => (
  <motion.img
    whileHover={{ scale: 1.3 }}
    src={src}
    alt={alt}
    className="duration-200 ficon"
  />
);

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
