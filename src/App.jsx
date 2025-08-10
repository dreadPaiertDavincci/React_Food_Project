import "./App.css";
import NavBar from "./Page/NavBar";
import Home from "./Page/Home";
import About from "./Page/About";
import Menu from "./Page/Menu";
import Blog from "./Page/Blog";
import Contact from "./Page/Contact";
import PFAQ from "./Page/PFAQ";
import P404 from "./Page/P404";
import TransitionAnimation from "../src/Animation/TransitionAnimation";
import TermsPrivacy from "./Page/Terms&Privacy";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes({ cartItems, setCartItems }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <TransitionAnimation>
              <Home />
            </TransitionAnimation>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionAnimation>
              <About />
            </TransitionAnimation>
          }
        />
        <Route
          path="/menu"
          element={
            <TransitionAnimation>
              <Menu cartItems={cartItems} setCartItems={setCartItems} />
            </TransitionAnimation>
          }
        />
        <Route
          path="/blog"
          element={
            <TransitionAnimation>
              <Blog />
            </TransitionAnimation>
          }
        />
        <Route
          path="/contact"
          element={
            <TransitionAnimation>
              <Contact />
            </TransitionAnimation>
          }
        />
        <Route
          path="/pfaq"
          element={
            <TransitionAnimation>
              <PFAQ />
            </TransitionAnimation>
          }
        />
        <Route
          path="/p404"
          element={
            <TransitionAnimation>
              <P404 />
            </TransitionAnimation>
          }
        />
        <Route
          path="/termsprivacy"
          element={
            <TransitionAnimation>
              <TermsPrivacy />
            </TransitionAnimation>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <NavBar cartItems={cartItems} setCartItems={setCartItems} />
      <AnimatedRoutes cartItems={cartItems} setCartItems={setCartItems} />
    </Router>
  );
}

export default App;
