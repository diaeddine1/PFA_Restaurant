import React from "react";
import tinder from "../Images/tinder.png";
import { useNavigate } from "react-router";
function DropMenu() {
  const userid = localStorage.getItem("userid");
  const navigate = useNavigate(0);
  const handlelogout = () => {
    localStorage.removeItem("userid");
    navigate(0);
    navigate("/");
  };
  return (
    <div className="menu">
      <li className="logo">
        <span className="ea">EA</span>
        <img src={tinder} />
      </li>
      <a href="/">
        <li className="home" style={{ fontFamily: "Pacifico, cursive" }}>
          Home
        </li>
      </a>

      <a href="/Restaurants">
        <li className="resto" style={{ fontFamily: "Pacifico, cursive" }}>
          Restaurant
        </li>
      </a>

      <a
        href="/AboutUs"
        className="info"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        About Us
      </a>

      {userid && (
        <a
          href="/AboutUs"
          className="info"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Dashboard
        </a>
      )}

      {userid !== null ? (
        <a
          className="info"
          style={{ fontFamily: "Pacifico, cursive" }}
          onClick={handlelogout}
        >
          logout
        </a>
      ) : (
        <a
          href="/login"
          className="info"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Log in
        </a>
      )}
    </div>
  );
}

export default DropMenu;
