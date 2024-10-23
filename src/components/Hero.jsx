import Button from "./ui/Button";
import ButtonContainer from "./ui/ButtonContainer";
import MainTitle from "./ui/MainTitle";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="section-container mb-40 pt-16">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src="/public/images/logo.png"
          width={250}
          height={250}
          alt="Logo"
          className="mx-auto my-16"
        />

        <MainTitle>A Timeline of Everything You Copy</MainTitle>

        <p className="max-w-3xl mx-auto mb-10 text-2xl text-darkGrayishBlue">
          ClipSync helps you monitor and manage every copied item. Access your
          clipboard across all your devices in real time.
        </p>

        <ButtonContainer>
          <Button className="bg-strongCyan">Download for iOS</Button>
          <Button className="bg-lightBlue">Download for iOS</Button>
        </ButtonContainer>
      </div>
    </section>
  );
};

export default Hero;
