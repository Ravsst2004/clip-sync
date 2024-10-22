import Button from "./ui/Button";

const Hero = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
        <img
          src="/public/images/logo.png"
          width={250}
          height={250}
          alt="Logo"
          className="mx-auto my-16"
        />

        <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
          A history of everything you copy
        </h3>

        <p className="max-w-3xl mx-auto mb-10 text-2xl text-darkGrayishBlue">
          Clip Sync allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
          <Button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
            Download for iOS
          </Button>
          <Button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
            Download for iOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
