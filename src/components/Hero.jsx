import ScaleOnReveal from "./motion/ScaleOnReveal";
import Button from "./ui/Button";
import ButtonContainer from "./ui/ButtonContainer";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="section-container mb-40 pt-16">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.3, transition: { duration: 0.5 } }}
          src="/images/logo.png"
          width={250}
          height={250}
          alt="Logo"
          className="mx-auto my-16"
        />

        <ScaleOnReveal>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="main-title"
          >
            A Timeline of Everything You Copy
          </motion.h1>
        </ScaleOnReveal>

        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-10 text-2xl text-darkGrayishBlue"
        >
          ClipSync helps you monitor and manage every copied item. Access your
          clipboard across all your devices in real time.
        </motion.p>

        <ButtonContainer>
          <Button className="bg-strongCyan">Download for IOS</Button>
          <Button className="bg-lightBlue">Download for MAC</Button>
        </ButtonContainer>
      </div>
    </section>
  );
};

export default Hero;
