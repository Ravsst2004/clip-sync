import ScaleOnReveal from "./motion/ScaleOnReveal";

const Snippets = () => {
  return (
    <section>
      <div className="section-container my-20 md:my-60">
        <ScaleOnReveal>
          <h1 className="main-title">Stay on Top of Your Snippets</h1>
        </ScaleOnReveal>
        <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-grayishBlue">
          Every copied item is instantly saved in the cloud, giving you quick
          access from any device. Use our apps to easily organize your snippets
          across platforms.
        </p>
      </div>
    </section>
  );
};

export default Snippets;
