import FeaturesList from "./ui/FeaturesList";
import { motion } from "framer-motion";

const Features = () => {
  const featuresList = [
    {
      title: "Quick Search",
      description:
        "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      title: "iCloud Sync",
      description:
        "Instantly saves and syncs snippets across all your devices.",
    },
    {
      title: "Complete History",
      description:
        "Retrieve any snippets from the first moment you started using the app.",
    },
  ];

  return (
    <section>
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2">
            <motion.img
              src="/images/image-computer.png"
              alt="Computer"
              className="md:absolute top-0 right-[50%]"
            />
          </div>

          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
            {featuresList.map((feature) => (
              <FeaturesList
                key={feature.title}
                {...feature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
