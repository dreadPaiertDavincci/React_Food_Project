
import "../Style/About.css";
import TeamSection from '../../Componant/TeamSection';
import "../Style/TeamSection.css"
import Footer from '../../Componant/Footer';
import "../Style/Footer.css"

function About() {
  return (
    <section className="AboutSection">
     <div className="Imageabout">
                    <h1 id="aboutTITLEID">About Us</h1>
                </div>
                <div className="HiddenButton">
                     HOME // About
                </div>

      <div className="aboutContinar">
  <div className="aboutImageText">
    <div className="aboutImage"> 
      <img src="/about1.png" alt="Tahiyati" />
    </div>

    <div className="aboutText">
<p className="highlight-text">
              We provide 100% halal bakery product.
            </p>

      <p>
 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nisi suscipit commodi, vitae eligendi assumenda tenetur sapiente obcaecati alias deserunt repudiandae atque a eaque aspernatur minus corporis debitis, iure non. 

    </p>
  <p>
  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt recusandae cumque voluptates eius ratione cum rem voluptate unde tenetur! Sunt minima eos saepe debitis beatae illum ipsa quibusdam recusandae.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae iusto, facil
    
      </p>
      
      <div className="HiddenButton3">
                    Contact Us →
                </div>
  
    </div>
  </div>
</div>

 <div className="cards-container">
      <div className="card">
        <h2>Our Mission</h2>
        <p>Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat.</p>
      </div>

      <div className="card">
        <h2>Our Vision</h2>
        <p>Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat.</p>
      </div>
    </div>

<div className="features-section">
  <div className="feature-card">
    <div className="feature-icon">
      <img src="/abo2.png" alt="Free Delivery" />
    </div>
    <div className="feature-text">
      <h3>Free Delivery</h3>
      <p>Lorem ipsum simply dummy text the printing type setting.</p>
    </div>
  </div>

  <div className="feature-card">
    <div className="feature-icon">
      <img src="/abo.png" alt="24/7 Support" />
    </div>
    <div className="feature-text">
      <h3>24/07 Support</h3>
      <p>Lorem ipsum simply dummy text the printing type setting.</p>
    </div>
  </div>

  <div className="feature-card">
    <div className="feature-icon">
      <img src="/abo3.png" alt="Secure Payment" />
    </div>
    <div className="feature-text">
      <h3>Secure Payment</h3>
      <p>Lorem ipsum simply dummy text the printing type setting.</p>
    </div>
  </div>
</div>
    <div>
      <TeamSection />
    </div>
<div>
      <Footer />
    </div>
        </section>
  );
}

export default About;

