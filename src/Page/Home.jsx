import "../Style/Home.css";
import HomeCard from "../../Componant/HomeCard";
import Footer from "../../Componant/Footer";
import "../Style/Footer.css";
function Home() {
  return (
    <section className="home-section">
      <div className="HomeContinar">
        <div className="HomeText">
          <p className="highlight-text">
            Take a taste
            <p> Come join us. </p>import "../Style/Home.css";
import HomeCard from "../../Componant/HomeCard";
import Footer from "../../Componant/Footer";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import "../Style/Footer.css";

function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Header Left Image
  const moveX1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const fastX1 = useSpring(moveX1, { stiffness: 200, damping: 30 });
  const moveY1 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Header Right Images
  const moveX2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const fastX2 = useSpring(moveX2, { stiffness: 200, damping: 30 });
  const moveX3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

 
  // Body Left Image
   const moveX4 = useTransform(scrollYProgress, [0, 0.4, 1], [0, 100, -300]);

  // Body Right Image
  const moveX5 = useTransform(scrollYProgress, [0, 0.4, 1], [150, -70,180]); 
  // Rotations for Home Images
  const rotateRight = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, -360]);

   // Bottom Left Image
    const moveX6 = useTransform(scrollYProgress, [0, 0.5, 1], [-150, 150, -150]);
   const moveX62 = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 200, -200]);

   // Body Right Image
 const moveX7 = useTransform(scrollYProgress, [0, 0.4, 1], [250, 150, 250]);

// العنصر الثاني يتحرك من اليمين (200) إلى اليسار (-200) ثم يرجع لليمين (200)
const moveX72 = useTransform(scrollYProgress, [0, 0.4, 1], [200, -200, 200]);

  return (
    <section ref={targetRef} className="home-section">
      
      {/* Header Section */}
      <div className="HomeHeaderImage">
        <div className="HeaderLeftImages">
          <motion.img
            style={{ x: fastX1, y: moveY1 }}
            id="HEIM"
            src="../../src/HomeImage/HO2.png"
            alt="Tahiyati"
          />
        </div>

        <div className="HeaderRightImages">
          <motion.img
            style={{ x: fastX2 }}
            id="HEIM2"
            src="../../src/HomeImage/HO4.png"
            alt="Tahiyati"
          />
          <motion.img
            style={{ x: moveX3 }}
            id="HEIM3"
            src="../../src/HomeImage/HO11.png"
            alt="Tahiyati"
          />
        </div>
      </div>

      <div className="HomeContinar">
        <div className="HomeText">
          <p className="highlight-text">
            Take a taste
            <p>Come join us.</p>
          </p>
          <p className="dark-text">Life is so endlessly delicious.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nesciunt recusandae cumque voluptates eius ratione cum rem voluptate
            unde tenetur! Sunt minima eos saepe debitis beatae illum ipsa
          </p>
          <div className="HiddenButton4">Contact Us</div>
        </div>

        <div className="HomeImage">
          <motion.img
            style={{ rotate: rotateRight }}
            src="../../src/HomeImage/HO20.png"
            id="HeaderHomImage"
            alt="img"
          />
          <motion.img
            style={{ rotate: rotateLeft }}
            src="../../src/HomeImage/HO3.png"
            id="HeaderHomImage2"
            alt="img"
          />
        </div>
      </div>

      {/* Body Images */}
      <div className="BodyImageContinar">
        <div className="BodImageLeft">
          <motion.img
            style={{ x: moveX4 }}
            id="HEIM4"
            src="../../src/HomeImage/HO9.png"
            alt="img"
          />
        </div>
        <div className="BodImageRight">
          <motion.img style={{x:moveX5}} id="HEIM5" src="../../src/HomeImage/HO21.png" alt="img" />
        </div>
      </div>

      {/* Home Cards */}
      <div className="HomeCardContainer">
        <HomeCard />
      </div>

      {/* Bottom Images */}
      <div className="CardBottomImagesContinar">
        <div className="BotLeft">
          <motion.img 
           style={{x:moveX6}}
          id="HEIM6" src="../../src/HomeImage/HO11.png" alt="Tahiyati" />
          <motion.img 
          style={{x:moveX62}}
          id="HEIM7" src="../../src/HomeImage/HO16.png" alt="Tahiyati" />
        </div>
        <div className="BotRight">
          <motion.img 
          style={{x:moveX7}}
          id="HEIM9" src="../../src/HomeImage/HO6.png" alt="Tahiyati" />
          <img id="HEIM8" src="../../src/HomeImage/HO18.png" alt="Tahiyati" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-container">
        <div className="testimonial-text">
          <h2>Let's see what other says</h2>
          <p className="subtitle">Please serve yourself without any hesitate</p>
          <p className="quote">
            <span className="quote-mark">“</span>
            I'm currently on the tour with Paula Abdul and while we were
            performing in town I came across your raw chocolate fudge at Whole
            Foods, OMG!! I was nice enough to share it with Paula Abdul, the
            Physical therapist and the glam squad. Of course they all agreed
            with me! So glad we are coming back next week
            <span className="quote-mark">”</span>
          </p>
        </div>
        <div className="testimonial-image">
          <img src="../../src/HomeImage/HO55.png" alt="User Testimonial" />
        </div>
      </div>

      {/* Footer */}
        <div className="HomeFooter">
        <Footer />  
      </div> 
    </section>
  );
}

export default Home;
          </p>
          <p className="dark-text">Life is so endlessly delicious.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nesciunt recusandae cumque voluptates eius ratione cum rem voluptate
            unde tenetur! Sunt minima eos saepe debitis beatae illum ipsa
          </p>
          <div className="HiddenButton4">Contact Us</div>
        </div>

        <div className="HomeImage">
          <img src="/home.jpg" alt="img" />
        </div>
      </div>

      <div className="HomeCardContainer">
        <HomeCard />
      </div>

     
      <div className="testimonial-container">
        <div className="testimonial-text">
          <h2>Let's see what other says</h2>
          <p className="subtitle">Please serve yourself without any hesitate</p>
          <p className="quote">
            <span className="quote-mark">“</span>
            I'm currently on the tour with Paula Abdul and while we were
            performing in town I came across your raw chocolate fudge at Whole
            Foods, OMG!! I was nice enough to share it with Paula Abdul, the
            Physical therapist and the glam squad. Of course they all agreed
            with me! So glad we are coming back next week
            <span className="quote-mark">”</span>
          </p>
        </div>
        <div className="testimonial-image">
          <img src="/home1.jpg" alt="User Testimonial" />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
