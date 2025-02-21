import React,{useEffect} from 'react'
import img1 from "../../assets/imgs/img1.jpg"
import img2 from "../../assets/imgs/img3.jpg"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import img3 from "../../assets/imgs/img2.jpg"
import "./home.css"


const Home = () => {
  // const controls = useAnimation();
  //   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  //   useEffect(() => {
  //     if (inView) {
  //       controls.start('show');
  //     } else {
  //       controls.start('hidden');
  //     }
  //   }, [controls, inView]);
const navigate=useNavigate();
const handleNavigate=(props)=>{
navigate(props);

   }
  
  return (
    <>
     <div className="img-page">
     <div className="discription-area">
     <h1 className="text-light">Empowering lives, one act of kindness at a time.</h1>
     <p className="text-light">this is the official website of _____ charity assosication something to adddddddisoerotjeorijergiojerogmdkmbs;rdgpwre</p>
     <div className="donate-button-container">
     <button className="vol-home-button" onClick={()=>handleNavigate("/contact")}>Contact Us</button>
     <button className="donation-home-button" onClick={()=>handleNavigate("/donate")}>Donate</button>
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
    <h1 className="text-center text-success">Our Programs</h1>
    <h4 className="text-center container-lg">Thanks to our specially trained staff, whose efforts are supported and amplified by hundreds of committed volunteers and donors, Horizons provides hope and opportunity to the families we serve.</h4>
    <div className="container-lg g-1 row d-flex">
<div className="row">
<div className="col-md-6">
      <img src={img1} className="img-fluid"></img>
      <h3>specially trained staff</h3>
      <p>specially trained staffspecially trained staffspecially trained staffvspecially trained staffspecially trained staffspecially trained staff</p>
    </div>
    <div className="col-md-6">
      <img src={img1} className="img-fluid"></img>
      <h3>specially trained staff</h3>
      <p>specially trained staffspecially trained staffspecially trained staffvspecially trained staffspecially trained staffspecially trained staff</p>
    </div>
</div>
<div className="row container-lg">
<div className="col-md-6">
      <img src={img1} className="img-fluid"></img>
      <h3>specially trained staff</h3>
      <p>specially trained staffspecially trained staffspecially trained staffvspecially trained staffspecially trained staffspecially trained staff</p>
    </div>
    <div className="col-md-6">
      <img src={img1} className="img-fluid"></img>
      <h3>specially trained staff</h3>
      <p>specially trained staffspecially trained staffspecially trained staffvspecially trained staffspecially trained staffspecially trained staff</p>
    </div>
</div>
    
    
    </div>
    
    </>
  )}

export default Home
