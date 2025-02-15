import React,{useEffect} from 'react'
import img1 from "../../assets/doug-linstedt-jEEYZsaxbH4-unsplash.jpg"
import img2 from "../../assets/seth-doyle-zf9_yiAekJs-unsplash.jpg"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img3 from "../../assets/bill-wegener-LqOO5Ko0zSo-unsplash.jpg"

import "./home.css"


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
     <p className="text-light">this is the official website of _____ charity assosication</p>
     <div className="donate-button-container">
     <button className="vol-home-button">Become a Volnteer</button>
     <button className="donation-home-button">Donate</button>
     </div>

     </div>
    </div>
    <h1 className="text-center py-3">Our Community</h1>
    <motion.div 
    ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}

     className="beneath-home-page">
      <motion.div variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}>
      <img src={img1}/>
      <p className="text-center">one for one</p>
      </motion.div>
      <motion.div variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}>
      <img src={img2}/>
      <p className="text-center">this one </p>
      </motion.div>
      <motion.div variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}>
      <img src={img3}/>
      <p className="text-center">one for one</p>
      </motion.div>
    </motion.div>
    </>
  )
}

export default Home
