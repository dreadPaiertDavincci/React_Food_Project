import "../Style/Home.css";
import HomeCard from "../../Componant/HomeCard"
import "../Style/HomeCard.css"
import Footer from '../../Componant/Footer';
import "../Style/Footer.css"


function Home() {
  return (
    <section  className="home-section" >
      <div className="HomeContinar">
        <div className="HomeText">
          <p className="highlight-text">Take a taste 
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
          <img src="/home.jpg" alt="img" />
        </div>
      </div>
    
    <div>

      <HomeCard/>
    </div>


 <div className="testimonial-container">
      <div className="testimonial-text">
        <h2>Let's see what other says</h2>
        <p className="subtitle">Please serve yourself without any hesitate</p>
        <p className="quote">
          <span className="quote-mark">“</span>
          I'm currently on the tour with Paula Abdul and while we were performing in town I came across your raw chocolate fudge at Whole Foods, OMG!! I was nice enough to share it with Paula Abdul, the Physical therapist and the glam squad. Of course they all agreed with me! So glad we are coming back next week
          <span className="quote-mark">”</span>
        </p>
      </div>
      <div className="testimonial-image">
        <img src="/home1.jpg" alt="User Testimonial" />
      </div>
    </div>

   

    </section>
);
}





export default Home;
