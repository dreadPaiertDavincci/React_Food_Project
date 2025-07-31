import ImageSlider from "../../Componant/ImageSlider";
import FoodCard from "../../Componant/FoodCard";
import FoodDate from "../../Componant/FoodDate";
import { useState } from "react";
import CardShowPage from "../../Componant/CardShowPage";
import "../Style/Menu.css";

function Menu({ cartItems, setCartItems }) {
   const [selectedFood, setSelectedFood] = useState(null);

   const handleCardClick = (food) => {
      setSelectedFood(food);
   };
    const handleAddToCart = (food) => {
      setCartItems(prevItems => {
         const exist = prevItems.find(item => item.CardTitle === food.CardTitle);
         if (exist) {
            return prevItems.map(item =>
               item.CardTitle === food.CardTitle 
                  ? { ...item, count: item.count + 1 } 
                  : item
            );
         } else {
            return [...prevItems, { ...food, count: 1 }];
         }
      });
   };

   return(
        <section className="MenuSection">
            <div className="ImagesGridContinar">
                <div className="ImageSliders">
                  <ImageSlider />
                </div>
            </div>

            <div className="FilterButtonFonts">  
                <div className="fontBox"> 
                  <div className="FB">
                        <i className='bxr bx-bowl-rice'></i> 
                        <span id="FodSpan">Authority</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="FB">
                        <i className='bxr bx-burger-alt'></i> 
                        <span id="FodSpan">Western food</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="FB">
                      <i className='bxr bx-bowl-hot'></i>
                      <span id="FodSpan">Oriental food</span>
                    </div> 
                    <div className="vertical-line"></div>
                    <div className="FB">
                      <i className='bxr bx-coffee-cup'></i> 
                      <span id="FodSpan">drinks</span>
                    </div>
                       <div className="vertical-line"></div>
                    <div className="FB">
                        <i class='bxr  bx-pizza-alt'></i> 
                        <span id="FodSpan">Pizza</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="FB">
                        <i className='bxr bx-taco'></i>
                        <span id="FodSpan">Candies</span>
                    </div>
                </div>     
            </div>

            <div className="FilterCardContinar"> 
                {FoodDate.map((food, index) => (
                  <FoodCard  
                    key={index} 
                    {...food}
                    onClick={() => handleCardClick(food)}
                    onAddToCart={() => handleAddToCart(food)}  
                  />
                ))}
            </div>
            <CardShowPage food={selectedFood} onClose={() => setSelectedFood(null)}
            onAddToCart={handleAddToCart}
             />
        </section>        
    );
}

export default Menu;
