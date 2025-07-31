import "./App.css";
import NavBar from "./Page/NavBar"; 
import Home from "./Page/Home";
import About from "./Page/About";
import Menu from "./Page/Menu"; 
import Blog from "./Page/Blog";
import Contact from "./Page/Contact"; 
import PFAQ from "./Page/PFAQ"; 
import P404 from "./Page/P404"; 
import TermsPrivacy from "./Page/Terms&Privacy"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App(){ 
  const [cartItems, setCartItems] = useState([]); 
  return (
    <Router> 
      <NavBar cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pfaq" element={<PFAQ />} />
        <Route path="/p404" element={<P404 />} />
        <Route path="/termsprivacy" element={<TermsPrivacy />} />
      </Routes>
    </Router>
  );
}

export default App;
