import "../Style/Nav.css"; 
import { FaCartShopping } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import ShowLogInPage from "../../Componant/ShowLogInPage";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartPage from "./CartPage";
function NavBar({ cartItems, setCartItems }) { 
    const [showCartBar , setShowCartBar] = useState(false); 
    const [showLogin, setShowLogin] = useState(false);
    const cartToggle = () => {
        setShowCartBar(!showCartBar);
    }
    const ToggleShowPage = () => { 
        setShowLogin(!showLogin);
    }
    const navItem = [
        {name: "Home", path:"/"},
        {name: "About", path:"/about"},
        {name: "Menu", path: "/menu"},
        {name: "Blog" , path: "/blog"},
        {name: "Contact", path: "/contact"},
        {name: "Pages", path: "#", subPage: [
            {name: "FAQ" , path: "/pfaq"},
            {name: "404", path: "/p404"},
            {name: "TermsPrivacy" , path:"/termsprivacy"}
        ]},
    ];
    const LoopNav = navItem.map((e, navIndex)=> { 
        return(
           <li key={navIndex} className={`nav-item ${e.subPage ? 'has-dropdown' : ''}`}>
             <Link to={e.path} id="LinkRouter" className="nav-link">
                {e.name}
                {e.subPage && <span className="dropdown-arrow">▼</span>}
             </Link>
             {e.subPage && (
                <ul className="dropdown">
                    {e.subPage.map((sub, subIndex)=> (
                        <li key={subIndex} id="subId">
                            <Link to={sub.path} className="subLink">{sub.name}</Link>
                        </li>
                    ))}
                </ul>
             )} 
          </li>
        );
    });
    const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);
    return(
        <> 
        <nav className="main-nav">
           <h1 id="Logo">Logo</h1>
            <ul className="ul-nav">
                {LoopNav}
            </ul>
            <div className="cartFavurateLogInContinar">     
               <div className="IconC" onClick={cartToggle} >
                  <FaCartShopping />
                  <span id="iconspan">{totalCount}</span> 
               </div>
              
               <div className="IconC" onClick={ToggleShowPage}>
                 <FaUserPlus />
               </div>
            </div>
        </nav>
       {showLogin && <ShowLogInPage onClose={ToggleShowPage} />} 
       {showCartBar && <CartPage cartItems={cartItems} setCartItems={setCartItems} onClose={cartToggle} />} 
     </>
    );
}

export default NavBar;