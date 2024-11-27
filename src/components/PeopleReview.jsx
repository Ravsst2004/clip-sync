import { DesktopCardReview, MobileCardReview } from "./ui/CardReview";
import SimpleSlider from "./ui/SimpleSlider";

const PeopleReview = () => {
  const userReviews = [
    {
      name: "Anisha Li",
      review:
        "“Clipboard has transformed the way I work across devices. Copying and pasting between my phone and laptop is now seamless and saves me so much time.”",
    },
    {
      name: "Alex Johnson",
      review:
        "“I love how Clipboard syncs instantly between all my devices. It’s a must-have tool for anyone who works on multiple platforms.”",
    },
    {
      name: "Sophia Martinez",
      review:
        "“The ability to share text and files across devices effortlessly is a game-changer. Clipboard makes my workflow faster and more efficient.”",
    },
    {
      name: "Emma Wilson",
      review:
        "“I’ve tried other clipboard managers, but none come close to the ease and reliability of Clipboard. Highly recommended!”",
    },
  ];

  return (
    <section className="bg-gray-100 py-6 max-w-full mx-auto text-center px-10">
      <h1 className="main-title">What People Are Saying</h1>
      <p className="max-w-3xl mx-auto mb-14 text-xl leading-9 text-grayishBlue">
        Hear directly from our customers and see how we&apos;ve made a positive
        impact on their lives and businesses.
      </p>

      <div className="md:hidden">
        <SimpleSlider>
          {userReviews.map((user, index) => (
            <MobileCardReview
              key={index}
              title={user.name}
              review={user.review}
            />
          ))}
        </SimpleSlider>
      </div>

      <div className="max-w-7xl mx-auto hidden md:block">
        <SimpleSlider slidesToShow={3}>
          {userReviews.map((user, index) => (
            <DesktopCardReview
              key={index}
              title={user.name}
              review={user.review}
            />
          ))}
        </SimpleSlider>
      </div>
    </section>
  );
};

export default PeopleReview;
