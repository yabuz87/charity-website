import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

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
      <h1 className="text-center  about-title-h1">About Us</h1>
      <hr />
      <p className="container-lg">
      Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this page. Privacy Statement.
      Number of Partners (vendors): 728.
      Use precise geolocation data and actively scan device characteristics for identification. This is done to store and access information on a device and to provide personalised ads and content, ad and content measurement, audience insights and product development.List of Partners (vendors)
      </p>
      <div className="about-section-container my-2">
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
                staggerChildren: 0.2,
              },
            },
          }}
          className="container-lg row m-2 d-flex justify-item-center"
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}
            className="col-3 card m-1 bg-transparent"
          >
            <h2 className="text-center">Brief Intoduction</h2>
            <p>
              At [Your Charity Association's Name], we are deeply committed to making a difference in the lives of the most vulnerable members of our community. Our mission is two-fold: to provide essential support and resources to the elderly who face life-threatening circumstances and to offer comprehensive educational and psychological aid to children in need.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}
            className="col-4 m-2 card bg-transparent"
          >
            <h2 className="text-center">Our Mission</h2>
            <p>
              We recognize that many elderly individuals live in conditions that jeopardize their safety and well-being. Our dedicated team works tirelessly to reach out to these individuals, offering them adequate survival aid to improve their quality of life. This includes providing:
              <ul>
                <li>Safe and comfortable living environments.</li>
                <li>Access to nutritious meals and healthcare services.</li>
                <li>Emotional support and companionship to combat loneliness.</li>
              </ul>
              By addressing these critical needs, we aim to ensure that our elderly community members can live with dignity and peace.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}
            className="col-4 m-2 card bg-transparent"
          >
            <h2 className="text-center">Values</h2>
            <p>
              We believe that every child deserves the opportunity to thrive, regardless of their circumstances. Our association focuses on delivering educational and psychological support to children who face significant challenges. Our initiatives include:
              <ul>
                <li>Providing access to quality education and learning materials.</li>
                <li>Offering counseling and psychological services to support mental health.</li>
                <li>Creating safe spaces for children to learn, play, and grow.</li>
              </ul>
              Through these efforts, we strive to empower children with the tools and support they need to build a brighter future.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}
            className="col-4 m-2 card bg-transparent"
          >
            <h2 className="text-center">Empowering Children</h2>
            <p>
              We believe that every child deserves the opportunity to thrive, regardless of their circumstances. Our association focuses on delivering educational and psychological support to children who face significant challenges. Our initiatives include:
              <ul>
                <li>Providing access to quality education and learning materials.</li>
                <li>Offering counseling and psychological services to support mental health.</li>
                <li>Creating safe spaces for children to learn, play, and grow.</li>
              </ul>
              Through these efforts, we strive to empower children with the tools and support they need to build a brighter future.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}
            className="col-4 m-2 card bg-transparent"
          >
            <h2 className="text-center">Join Us in Making a Difference</h2>
            <p>
              At [Your Charity Association's Name], we know that lasting change is possible when we come together as a community. We invite you to join us in our mission to improve the lives of the elderly and children in need. Whether through donations, volunteering, or spreading awareness, your involvement can make a profound impact. Together, we can create a safer, more supportive world for those who need it most.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
