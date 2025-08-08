import "../Style/P404.css";
import Footer from "../../Componant/Footer";

function P404() {
  return (
    <section className="P404Section">
      <div className="ErrorMessageContinar">
        <h1 id="M404">404</h1>
      </div>
    
      <div className="HiddenButton404">HOME // 404</div>
      <div className="P404Messages">
        <div className="P404Titles">
          <h1 id="P404Title">
            This is Awkward. <br />
            We Can't Find That Page.
          </h1>
          <p id="P404Paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            repellendus, laboriosam a veniam nam natus?
          </p>
        </div>

        <div className="P404Images">
          <img src="../../public/404.png" id="ErrorImage" alt="" />
        </div>
      </div>
        <div>
        <Footer />
      </div>
    </section>
  );
}

export default P404;
