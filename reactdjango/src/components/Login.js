import React from "react";
import tinder from "../Images/tinder.png";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <li className="logo">
        <span className="ea">EA</span>
        <img src={tinder} />
      </li>
      <h1 className="heading">
        <Link to="/login">Login</Link> or <Link to="/signup">Sign up</Link>
      </h1>
    </div>
  );
}

export default Login;
