import Reveal from "./motion/Reveal";
import MainTitle from "./ui/MainTitle";

const Snippets = () => {
  return (
    <section>
      <div className="section-container my-20 md:my-60">
        <Reveal>
          <h1 className="main-title">Stay on Top of Your Snippets</h1>
          <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-grayishBlue">
            Every copied item is instantly saved in the cloud, giving you quick
            access from any device. Use our apps to easily organize your
            snippets across platforms.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Snippets;
