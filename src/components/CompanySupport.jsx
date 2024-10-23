import MainTitle from "./ui/MainTitle";

const CompanySupport = () => {
  return (
    <section>
      <div className="my-44">
        <MainTitle className="text-center">Company Support</MainTitle>
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-20 md:flex-row md:space-y-0">
          <img src="images/logo-google.png" alt="" />
          <img src="images/logo-ibm.png" alt="" />
          <img src="images/logo-microsoft.png" alt="" />
          <img src="images/logo-hp.png" alt="" />
          <img src="images/logo-vector-graphics.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CompanySupport;
