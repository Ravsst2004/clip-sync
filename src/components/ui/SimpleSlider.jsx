import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ({ children, slidesToShow }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow ?? 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SimpleSlider;
