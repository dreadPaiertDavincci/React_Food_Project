import "../src/Style/ImageSlider.css";

function ImageSlider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2500">
          <img
            src="../public/Images/Men1.jpg"
            id="IMSL"
            className="d-block w-100"
            alt="Tahiyati"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <img
            src="../public/Images/Men2.jpg"
            id="IMSL"
            className="d-block w-100"
            alt="Men2"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <img
            src="../public/Images/Men4.jpg"
            id="IMSL"
            className="d-block w-100"
            alt="Men4"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <img
            src="../public/Images/Men3.jpg"
            id="IMSL"
            className="d-block w-100"
            alt="Men3"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <img
            src="../public/Images/Men5.jpg"
            id="IMSL"
            className="d-block w-100"
            alt="Men5"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <img
            src="../public/Images/Men6.jpg"
            id="IMSL"
            className="d-block w-100"
            alt="Men6"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageSlider;
