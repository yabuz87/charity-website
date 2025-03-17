import React from "react";
import Slider from "react-slick";
import "./imgSlider.css"
import {data} from "../../../assets/imgs/project";

function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };
  return (
    <div className="slider-container container-lg">
      <Slider {...settings}>
      {data.map((data, index) => (
          <div key={index} className="slide" aria-hidden="false">
            <img src={data.img} alt={`Slide ${index}`}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
