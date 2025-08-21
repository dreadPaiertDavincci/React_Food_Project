import "../Style/Home.css";
import HomeCard from "../../Componant/HomeCard";
import Footer from "../../Componant/Footer";
import "../Style/Footer.css";
function Home() {
  return (
    <section className="home-section">
      <div className="HomeHeaderImage">

        <div className="HeaderLeftImages">
          <img id="HEIM" src="../../src/HomeImage/HO2.png" alt="Tahiyati" />
        </div>

        <div className="HeaderRightImages">
          <img id="HEIM2" src="../../src/HomeImage/HO4.png" alt="Tahiyati" />
          <img id="HEIM3" src="../../src/HomeImage/HO11.png" alt="Tahiyati" />
        </div>

      </div>
      <div className="HomeContinar">
        <div className="HomeText">
          <p className="highlight-text">
            Take a taste
            <p> Come join us. </p>
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
          <img src="../../src/HomeImage/HO20.png" id="HeaderHomImage" alt="img" />
          <img src="../../src/HomeImage/HO3.png" id="HeaderHomImage2" alt="img" />
        </div>
      </div>

      <div className ="BodyImageContinar">
        <div className="BodImageLeft">
           <img id="HEIM4" src="../../src/HomeImage/HO9.png"  alt="img" />
        </div>

        <div className="BodImageRight">
          <img id="HEIM5" src="../../src/HomeImage/HO21.png"  alt="img" />

        </div>
        
      </div>

      <div className="HomeCardContainer">
        <HomeCard />
      </div>

      <div className="CardBottomImagesContinar">

        <div className="BotLeft">
          <img id="HEIM6" src="../../src/HomeImage/HO11.png" alt="Tahiyati" />
          <img id="HEIM7" src="../../src/HomeImage/HO16.png" alt="Tahiyati" />
        </div>

        <div className="BotRight">
          <img id="HEIM9" src="../../src/HomeImage/HO6.png" alt="Tahiyati" />
          <img id="HEIM8" src="../../src/HomeImage/HO18.png" alt="Tahiyati" />
        </div>

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
          <img src="../../src/HomeImage/HO55.png" alt="User Testimonial" />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
