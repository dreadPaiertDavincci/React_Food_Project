import '../src/Style/Footer.css';

function Footer () {
  const footerElement =  ["Home" , "About" , "Menu" , "Contact"];
  const footerElement2 =  ["FAQ" , "404" ,"Terms&Privacy"];

  const footerElement2Loop = footerElement2.map((Ele ,  index) => {
    return(<li key={index}><a href="#">{Ele}</a></li>);
  });
  const footerElementLoop =footerElement.map((Ele , index) => {  
    return(<li key={index}><a href="#">{Ele}</a></li>);
  }); 

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section left">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {footerElementLoop}
          </ul>
        </div>        
        <div className="footer-section center">
          <h2 className="footer-logo">ChefZone</h2>
          <form className="footer-search-form">
            <input type="text" placeholder="Search..." className="footer-search-input" />
            <button type="submit" className="footer-search-button">Search</button>
          </form>
        </div>

        <div className="footer-section right">
          <h3 className="footer-heading">Contact Us</h3>
          <p>Email: support@chefzone.com</p>
          <p>Phone: +123 456 7890</p>
            <div className="footer-section left">
          <ul className="footer-links">
            {footerElement2Loop}
          </ul>
        </div>  
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ChefZone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;