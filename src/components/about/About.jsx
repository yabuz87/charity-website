import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import img3 from "../../assets/imgs/img3.jpg";
import { useInView } from 'react-intersection-observer';
import './About.css';
// import VerticalCarousel from './VerticalCarousel/VerticalCarousel';

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <div className="img-Page">
        <h1 className="title-about"></h1>
      </div>
      <div className="about-description-container container-fluid">
        <div className="text-center">
          <h1 className="text-center text-success m-5 fw-bold">A Global Community</h1>
          <p className="description fs-4 container-lg" style={{width:"750px"}}>We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>
        <div className="text-center">
          <h1 className="text-center text-success m-5 fw-bold">Our Mission</h1>
          <p className="description fs-4 container-md" style={{width:"750px"}}>We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>
        <div className="text-center">
          <h1 className="text-center text-success m-5 fw-bold">Vision</h1>
          <p className="description fs-4 container-md" style={{width:"750px"}}>We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>
      </div>
      <h1 className="text-success">Here's how </h1>
      <div >

      </div>
      <div className="container-lg">
    <h1></h1>
      </div>
    </>
  );
};

export default About;
