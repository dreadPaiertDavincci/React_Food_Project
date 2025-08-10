import React from 'react';
import "../src/Style/TeamSection.css";
import { motion } from "framer-motion";

const teamMembers = [
  { name: 'Armando Ryan',
    title: 'Founder & CEO',
    image: '/cef1.png' },
  
  { name: 'Lucille Andrews',
    title: 'Product Manager',
    image: '/cef2.png' },

  { name: 'Nichole Lloyd',
    title: 'Director', 
    image: '/cef3.png' },

  { name: 'Duane Campbell',
    title: 'Chef Manager',
    image: '/cef4.png' 
  },
];

export default function TeamSection() {
  return (
    <section className="Tsection">
      <div className='HiddenButton2Continar'>
      <motion.div 
       initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.9 }}
        viewport={{ once:true, amount: 0.2 }}
      className="HiddenButton2">
               TEAM MEMBERS
                </motion.div>
      </div>

      <motion.h2 
      initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
        viewport={{ once:true, amount: 0.2 }} 
      className="title2">Our Expert Chef</motion.h2>
      <div className="grid">
        {teamMembers.map((member , index) => (
          <motion.article 
          initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.5 , delay: index * 0.5 ,type: "tween"}}
            viewport={{ once:true, amount: 0.2 }}
          className="card2" key={member.name}>
            <div className="imageWrapper">
              <img src={member.image} alt={member.name} className="image" loading="lazy" />
            </div>
            <div className="text">
              <h3 className="name">{member.name}</h3>
              <p className="role">{member.title}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
