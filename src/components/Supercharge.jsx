import ScaleOnReveal from "./motion/ScaleOnReveal";
import MainTitle from "./ui/MainTitle";
import SuperchargeList from "./ui/SuperchargeList";

const Supercharge = () => {
  const superchargeList = [
    {
      title: "Create Blacklists",
      description:
        "Easily search your snippets by content, category, web address, application, and more.",
      img: "images/icon-blacklist.svg",
    },
    {
      title: "Plain Text Snippets",
      description:
        "Remove unwanted formatting from copied text for a consistent look.",
      img: "images/icon-text.svg",
    },
    {
      title: "Sneak Preview",
      description:
        "Quick preview of all snippets on your Clipboard for easy access.",
      img: "images/icon-preview.svg",
    },
  ];

  return (
    <section>
      <div className="section-container my-20">
        <ScaleOnReveal>
          <MainTitle>Supercharge your workflow</MainTitle>
        </ScaleOnReveal>

        <p className="section-content mb-24 text-xl leading-9 text-grayishBlue">
          We&apos;ve got the tools to boost your productivity.
        </p>

        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          {superchargeList.map((item, index) => (
            <SuperchargeList
              key={index}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supercharge;
