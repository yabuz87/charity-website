import React, { Component } from "react";
import  data from "../../../assets/imgs/project"
import Slider from "react-slick";
import "./Gallery.css";

function GalleryCarouel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slider-container">
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

export default GalleryCarouel;
