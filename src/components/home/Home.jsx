import React,{useEffect} from 'react'
import img1 from "../../assets/doug-linstedt-jEEYZsaxbH4-unsplash.jpg"
import img2 from "../../assets/seth-doyle-zf9_yiAekJs-unsplash.jpg"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img3 from "../../assets/bill-wegener-LqOO5Ko0zSo-unsplash.jpg"

import "./home.css"
// import ImageSlider from './ImageSlider';
import HomePageImgSlider from './HomePageImgSlider';


const Home = () => {
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
     <div className="img-page">
     <div className="discription-area">
     <h1 className="text-light">Empowering lives, one act of kindness at a time.</h1>
     <p className="text-light">this is the official website of _____ charity assosication something to adddddddisoerotjeorijergiojerogmdkmbs;rdgpwre</p>
     <div className="donate-button-container">
     <button className="vol-home-button">Become a Volnteer</button>
     <button className="donation-home-button">Donate</button>
     </div>

     </div>
    </div>
   
    {/* <h1 className="text-center py-3 text-dark">Our Focusing Area</h1> */}
    <motion.div 
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="grid-container"
    >
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-book" style={{color:"black",fontSize:"40px"}}></i>
        <h5>Education</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-egg-fried" style={{color:"orange",fontSize:"40px"}}></i>
        <h5>Healthy Food</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-suit-heart-fill fs-3" style={{color:"#F33A6A",fontSize:"40px"}}></i>
        <h5>Love And Care</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-droplet-half text-primary" style={{fontSize:"40px"}}></i>
        <h5>Pure Water</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-capsule-pill" style={{color:"black",fontSize:"40px"}}></i>
        <h5>Medical</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }} 
        className="grid-item"
      >
        <i className="bi bi-capsule-pill" style={{color:"black",fontSize:"40px"}}></i>
        <h5>Spirituality</h5>
        <p>Our goal in health is to reach every child to ensure their safety and well-being in this country.</p>
      </motion.div>
    </motion.div>
    <div className="container-lg">
    <HomePageImgSlider/>
    </div>
    
    </>
  )}

export default Home
