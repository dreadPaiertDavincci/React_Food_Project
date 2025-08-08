// src/components/Footer.jsx
import React from 'react';
import '../src/Style/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: Navigation Links */}
        <div className="footer-section left">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Center: Search Bar */}
        <div className="footer-section center">
          <h2 className="footer-logo">ChefZone</h2>
          <form className="footer-search-form">
            <input type="text" placeholder="Search..." className="footer-search-input" />
            <button type="submit" className="footer-search-button">Search</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="footer-section right">
          <h3 className="footer-heading">Contact Us</h3>
          <p>Email: support@chefzone.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ChefZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;