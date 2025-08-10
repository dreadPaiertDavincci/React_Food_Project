import React from 'react';
import "../src/Style/TeamSection.css";

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
      <div className="HiddenButton2">
               TEAM MEMBERS
                </div>
      <h2 className="title2">Our Expert Chef</h2>
      <div className="grid">
        {teamMembers.map(member => (
          <article className="card2" key={member.name}>
            <div className="imageWrapper">
              <img src={member.image} alt={member.name} className="image" loading="lazy" />
            </div>
            <div className="text">
              <h3 className="name">{member.name}</h3>
              <p className="role">{member.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
