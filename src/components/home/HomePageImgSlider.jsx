import React from "react";
import Slider from "react-slick";


function HomePageImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        
        
      </Slider>
    </div>
  );
}

export default HomePageImgSlider;
