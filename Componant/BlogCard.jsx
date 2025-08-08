import "../src/Style/BlogCard.css";
function Card({ image, icon, title, count }) {
  return (
    <div className="food-card">
      <img className="background-img" src={image} alt=" img " />
      <div className="overlay">
        <i className={`${icon} icon`}></i>
        <h3 className="title">{title}</h3>
        <p className="subtitle">{count} count </p>
      </div>
    </div>
  );
}

export default Card;


