import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import img3 from "../../assets/imgs/img3.jpg";
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
      </div>
      <h1 className="title-about text-light">who are We ?</h1>
      <h2 className="sub-title my-4">We serve Humanity and stand for equality forEver</h2>
      <div className="about-description-container container-fluid">
        <div className="text-center">
          <h1 className="text-center text-success m-3 fw-bold">A Global Community</h1>
          <p className="description fs-5 container-lg" style={{width:"750px"}}>We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>
        <div className="text-center">
          <h1 className="text-center text-success m-5 fw-bold">Our Mission</h1>
          <p className="description fs-5 container-md" style={{width:"750px"}}>We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>
        <div className="text-center">
          <h1 className="text-center text-success m-5 fw-bold">Vision</h1>
          <p className="description fs-5 container-md" style={{width:"750px"}}>We are a global community of Child Champions that serves children in poverty so they can discover hope and reach their God-given potential.</p>
        </div>
      </div>
      <h1 className="text-success text-center my-5">Here's how </h1>
      <hr></hr>
     
      <div className="row container-fluid" style={{rowGap:"170px"}}>
      <div className="  row container-fluid">
        <div className="col-md-7">
       <p  className="" style={{fontSize:"17px",alignCenter:"center"}}> Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this page. Privacy Statement.
        Number of Partners (vendors): 728.
        We and our partners process data to:</p>
        </div>
        <img  className="col-md-4 img-fluid"src={img3}></img>
      </div>
      <div className=" row container-fluid">
      <img  className="col-md-4" src={img3}></img>
        <div className="col-md-7">
       <p  style={{fontSize:"17px",alignCenter:"center"}}> Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this page. Privacy Statement.
        Number of Partners (vendors): 728.
        We and our partners process data to:</p>
        </div>
        
      </div>
      </div>

      <div>

      </div>
      <div className="container-lg">
    <h1></h1>
      </div>
    </>
  );
};

export default About;
