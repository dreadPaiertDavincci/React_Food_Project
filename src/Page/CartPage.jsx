import "../Style/CartShow.css";
import { FiArrowRightCircle } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function CartPage({ cartItems, setCartItems, onClose }) {
  const handleIncrement = (title) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.CardTitle === title ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (title) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.CardTitle === title && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleRemove = (title) => {
    setCartItems((prev) => prev.filter((item) => item.CardTitle !== title));
  };

 const totalPrice = cartItems.reduce((acc, item) => {
  const priceString = item.CardPrice.replace("$", ""); 
  const price = parseFloat(priceString) || 0; 
  return acc + price * item.count;
}, 0);

  return (
    <div className="side-cart">
      <div className="TotalPriceContinar">
        <p id="TotolParagraph">Total Price:</p>
        <span className="totalPriceSpan">{totalPrice.toFixed(2)}$</span>
      </div>

      <button className="close-btn" onClick={onClose}>
        <FiArrowRightCircle />
      </button>

      <div className="ItemsContinar">
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.map((item) => (
          <div key={item.CardTitle} className="Item">
            <div className="ImageBar">
              <img
                src={item.ImagePath}
                id="ImageBAr"
                alt={item.CardTitle}
              />
            </div>
            <div className="TitleBar">
              <p id="paragraphBar">{item.CardTitle}</p>
              <strong id="PriceBar">{item.CardPrice}</strong>
              <div className="CounterBar">
                <button
                  className="MiBarbtn"
                  onClick={() => handleDecrement(item.CardTitle)}
                >
                  -
                </button>
                <span id="CounBar">{item.count}</span>
                <button
                  className="MiBarbtn"
                  onClick={() => handleIncrement(item.CardTitle)}
                >
                  +
                </button>
              </div>
            </div>
            <div
              className="DeletButtonBar"
              onClick={() => handleRemove(item.CardTitle)}
            >
              <MdDelete />
            </div>
          </div>
        ))}
      </div>

      <div className="completed">
        <form action="" onClick={(e) => e.preventDefault()}>
          <button id="barButton" type="submit">
            Completed
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
