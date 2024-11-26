import Button from "./ui/Button";
import ButtonContainer from "./ui/ButtonContainer";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  const mainTextOpacity = useTransform(scrollY, [0, 510], [1, 0]);
  const mainTextScale = useTransform(scrollY, [0, 550], [1, 1.2]);
  const paragraphTextOpacity = useTransform(scrollY, [0, 700], [1, 0]);

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

        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ opacity: mainTextOpacity, scale: mainTextScale }}
          className="main-title"
        >
          A Timeline of Everything You Copy
        </motion.h1>

        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ opacity: paragraphTextOpacity }}
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
