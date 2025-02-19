import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../../assets/imgs/project";
import "./imgSlider.css";

function ProjectDescriptionSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  const [readMore,setReadMore]=useState(false);
  const handleReadMore=()=>
  {
    setReadMore(!readMore);
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((proj, index) => (
          <div className="" key={index}>
            <h3 className="text-center text-dark">{proj.title}</h3>
            <div className="row d-flex align-items-center">
            <p className="col-md-7" style={{ margin: "5px" }}>{proj.description}
            <span className={`${readMore? 'd-block' : 'd-none'}`}>{proj.readMore}</span>
            </p>
            
            <img src={proj.img} className="col-md-4"/>
            </div>
            <button className="btn btn-success" style={{ marginTop: "10px",display:"flex",alignItems:"center"}} onClick={handleReadMore}>{readMore ? "Read Less": "Read More"}</button>
            <p></p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectDescriptionSlider;
