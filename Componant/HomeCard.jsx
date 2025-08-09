import React from 'react';
import '../src/Style/HomeCard.css';

const dishes = [
  {
    title: 'Stirred Egg',
    description: 'This might be the most common Chinese family dish. The dish is easy to cook, fry the stirred egg and sliced tomato.',
    image: '/hcard.jpg',
  },
  {
    title: 'Kung Pao Chicken',
    description: 'When temperatures plummet and you’re craving something warm and cozy, you can’t go wrong with fluffy.',
    image: '/hcard1.jpg',
  },
  {
    title: 'Sweet Pork Chops',
    description: 'Sweet and sour dishes are popular among Chinese families, although the ingredients and cooking methods vary.',
    image: '/hcard2.jpg',
  },
];

const MenuSection = () => {
  return (
    <section className="menu-container">
      <div className="menu-header">
        <h2>What's on our Plate</h2>
        <p>Please serve yourself without any hesitate</p>
        <div className="menu-tabs">
          <span>Appetizers</span>
          <span className="active">Main Dish</span>
          <span>Dessert</span>
        </div>
      </div>

      <div className="menu-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="menu-card">
            <img src={dish.image} alt={dish.title} className="menu-img" />
            <h3>{dish.title}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

