import { useRef, useState } from "react";
import "../src/Style/ShowLogInPage.css";
import SocialMeda from "./SocialMeda";

function ShowLogInPage({ onClose }) {
  const [colse, setClose] = useState(false);
  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      onClose();
      setClose(false);
    }, 150);
  };

  const [ShowDate, setShowDate] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChang = (e) => {
    const { name, value } = e.target;
    setShowDate({ ...ShowDate, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // no Reload Page;
    const { userName, email, password } = ShowDate;
    if (!userName.trim() || !email.trim() || !password.trim()) {
      alert("Error!!!!");
      return;
    }
    // console.log(ShowDate);
    if (userNameRef.current) userNameRef.current = "";
    if (emailRef.current) emailRef.current = "";
    if (passwordRef.current) passwordRef.current = "";
    setShowDate({ userName: "", email: "", password: "" });
  };

  return (
    <div className="modal-overlay">
      <div className={`login-modal ${colse ? "fade-out" : ""}`}>
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <h2 id="SGTitke">Sign Up</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="InputBoxN">
            <input
              type="text"
              id="ShIn"
              name="userName"
              value={ShowDate.userName}
              onChange={handleChang}
              placeholder="UserName"
            />
          </div>

          <div className="InputBoxN">
            <input
              type="text"
              id="ShIn"
              value={ShowDate.email}
              onChange={handleChang}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="InputBoxN">
            <input
              type="text"
              id="ShIn"
              value={ShowDate.password}
              onChange={handleChang}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="InputBoxN">
            <button type="submit" className="Showbtn">
              Sign Up
            </button>
          </div>
          <p id="SignOR">OR</p>
          <div className="SignUpLine"></div>

          <div className="Social">
            <SocialMeda />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShowLogInPage;
