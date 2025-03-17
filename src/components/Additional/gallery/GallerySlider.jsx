import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules'; // Import Autoplay module
import images from '../../../assets/img';
import 'swiper/css';
import 'swiper/css/effect-cards';


const GallerySlider = () => {
  return (
    <div className="mySwiperContainer border" style={{
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      padding:"10px",
      height:"60vh"
    }}>
    <div className="d-flex align-items-center justify-content-center " style={{gap:"150px"}}>
    <div style={{marinTop:"30px"}}>
      <h4>
        this one is the title
      </h4>
      <p>this one is the description</p>
    </div>
      <div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]} // Add Autoplay module here
        className="mySwiper"
        style={{ width: '500px' }}
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 3000, // Delay between transitions in milliseconds (3 seconds)
          disableOnInteraction: false, // Prevent autoplay from stopping after user interaction
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
    </div>
  );
};

export default GallerySlider;
