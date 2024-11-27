import CompanySupport from "./components/CompanySupport";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PeopleReview from "./components/PeopleReview";
import Snippets from "./components/Snippets";
import Supercharge from "./components/Supercharge";

const App = () => {
  return (
    <>
      <Hero />
      <Snippets />
      <Features />
      <Supercharge />
      <PeopleReview />
      <CompanySupport />
      <Footer />
    </>
  );
};

export default App;
