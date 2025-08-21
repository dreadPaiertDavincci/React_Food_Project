import React, { useEffect } from "react";
import "../src/Style/CardShowPage.css";
import SizeFood from "./sizeFood";
import { useState } from "react";

function CardShowPage({ food, onClose, onAddToCart }) {
  const [Count, setCount] = useState(1);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    setCount(1);
  }, [food]);

  const plusCounter = () => {
    setCount((e) => e + 1);
  };

  const decrimint = () => {
    setCount((e) => {
      if (e > 1) {
        return e - 1;
      } else {
        return 1;
      }
    });
  };
  const handleAdd = () => {
    for (let i = 0; i < Count; i++) {
      onAddToCart(food);
    }
    onClose();
  };
  if (!food) return null;
  const unitPrice = parseFloat(food.CardPrice.replace(/[^\d.]/g, "")) || 0;
  const totalPrice = unitPrice * Count;
  return (
    <div className="modal-overlay2" onClick={handleClose}>
      <div
        className={`modal-content ${isClosing ? "fade-out" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={handleClose}>
          ×
        </button>
        <img
          src={food.ImagePath}
          alt={food.CardTitle}
          className="modal-image"
        />
        <h2>{food.CardTitle}</h2>
        <p>{food.CardParagraph}</p>
        <div className="price-section">
          <p>
            <strong>Original price : </strong> {unitPrice.toFixed(2)} $
          </p>
          <p>
            <strong>Total Price : </strong> {totalPrice.toFixed(2)} $
          </p>
        </div>

        <div className="CounterContinar">
          <button className="minasbtn" onClick={decrimint}>
            -
          </button>
          <p className="CounterResult">{Count}</p>
          <button className="plusBtn" onClick={plusCounter}>
            +
          </button>
        </div>

        <div className="SizeFoodContinar">
          <SizeFood />
        </div>

        <button className="add-to-cart-btn2" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default CardShowPage;
