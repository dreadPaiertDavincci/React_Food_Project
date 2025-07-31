import "../src/Style/FoodCard.css";

function FoodCard({ ImagePath, CardTitle, CardParagraph, CardPrice, onClick, onAddToCart }) {

    return (
        <div className="card-container" onClick={onClick}>
            <div className="card-image-container">
                <img src={ImagePath} alt={CardParagraph} className="card-image"/>
            </div>
            
            <div className="card-content">
                <h3 className="card-title">{CardTitle}</h3>   
                <p className="card-description">{CardParagraph}</p>
                <div className="card-price"><span className="price-text">{CardPrice}</span></div>
                <button 
                    className="add-to-cart-btn" 
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart();
                    }}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default FoodCard;
