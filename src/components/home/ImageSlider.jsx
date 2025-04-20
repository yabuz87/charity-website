import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider";
import "./slider.css";
import { slidesData } from '../../assets/slidesData';

const ImageSlider = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slidesData.map(slide => (
          <div key={slide.id} className="slide">
            <img src={slide.img} alt={`Slide ${slide.id}`} />
            <h2 className="title-on">{slide.title}</h2>
            <p className="caption">{slide.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-next-arrow`} onClick={onClick} />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow custom-prev-arrow`} onClick={onClick} />
  );
};

export default ImageSlider;
