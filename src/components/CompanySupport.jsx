import MainTitle from "./ui/MainTitle";

import { motion } from "framer-motion";

const CompanySupport = () => {
  const images = [
    { src: "images/logo-google.png", alt: "Google logo" },
    { src: "images/logo-ibm.png", alt: "IBM logo" },
    { src: "images/logo-microsoft.png", alt: "Microsoft logo" },
    { src: "images/logo-hp.png", alt: "HP logo" },
    {
      src: "images/logo-vector-graphics.png",
      alt: "Vector Graphics logo",
    },
  ];

  return (
    <section>
      <div className="my-44">
        <MainTitle className="text-center">Company Support</MainTitle>
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-20 md:flex-row md:space-y-0">
          {images.map(({ src, alt }) => (
            <motion.img
              key={alt}
              whileHover={{ scale: 1.3, transition: { duration: 0.5 } }}
              transition={{ type: "spring", stiffness: 400 }}
              src={src}
              alt={alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySupport;
