import { useRef } from 'react'; 
import { motion, useScroll, useTransform } from 'framer-motion'; 
import "../src/Style/HomeCard.css"; 

const dishes = [ 
  { title: "Stirred Egg", description: "This might be the most common Chinese family dish. The dish is easy to cook, fry the stirred egg and sliced tomato.", image: "../src/HomeImage/HO5.png" }, 
  { title: "Kung Pao Chicken", description: "When temperatures plummet and you’re craving something warm and cozy, you can’t go wrong with fluffy.", image: "../src/HomeImage/HO14.png" }, 
  { title: "Sweet Pork Chops", description: "Sweet and sour dishes are popular among Chinese families, although the ingredients and cooking methods vary.", image: "../src/HomeImage/HO15.png" } 
]; 

const MenuSection = () => { 
  const targetRef = useRef(null); 
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] }); 

  // حركة الكروت للأعلى
  const cardTransforms = dishes.map((_, index) => {
    const start = index * 0.3; // بداية التحريك لكل كرت
    const end = start + 0.5; // نهاية التحريك
    return useTransform(scrollYProgress, [start, end], [150, 0]); // يتحرك من 100px تحت الى 0px
  });

  // دوران الصور
  const imageRotates = dishes.map((_, index) => {
    const start = index * 0.2;
    const end = start + 0.5;
    return useTransform(scrollYProgress, [start, end], [0, 360]); 
  });

  return ( 
    <section ref={targetRef} className="menu-container"> 
      <motion.div 
        initial={{ opacity: 0, y: 70 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }} 
        viewport={{ once: true, amount: 0.2 }} 
        className="menu-header"
      > 
        <h2>What's on our Plate</h2> 
        <p>Please serve yourself without any hesitate</p> 
      </motion.div> 

      <div className="menu-grid"> 
        {dishes.map((dish, index) => ( 
          <motion.div 
            key={index} 
            className="menu-card"
            style={{ 
              y: cardTransforms[index], // الكرت يتحرك للأعلى
            }}
          > 
            <motion.img 
              src={dish.image} 
              alt={dish.title} 
              className="menu-img" 
              style={{ rotate: imageRotates[index] }} // الصورة تدور
            /> 
            <h3>{dish.title}</h3> 
            <p>{dish.description}</p> 
          </motion.div> 
        ))} 
      </div> 
    </section> 
  ); 
}; 

export default MenuSection;
