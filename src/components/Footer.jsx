import { useRef } from "react";
import FooterSocialIcons from "./ui/FooterSocialIcons";
import SitemapMenu from "./ui/SitemapMenu";
import { motion } from "framer-motion";

const Footer = () => {
  const siteMap = [
    ["FAQs", "Contact Us"],
    [" Privacy Policy", "Press Kit"],
    ["Install Guide"],
  ];

  const ref = useRef({ element: null, clickCount: 0 });
  const handleClick = () => {
    if (ref.current) {
      ref.current.clickCount += 1;
      console.log("Clicked", ref.current.clickCount, "times");
    }
  };

  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.img
            drag={true}
            onClick={handleClick}
            src="images/logo.png"
            alt=""
            className="w-32 my-10"
          />
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <SitemapMenu siteMap={siteMap} />
            </div>

            <FooterSocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
