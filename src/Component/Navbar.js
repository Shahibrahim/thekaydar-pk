import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div>
        <Link to="/App">
        <img className="logo mx-5" src={logo} alt="Logo" /></Link>
      </div>
      <div className="btns my-4 mx-5">
      <Link to="/product-page">
        <img className="cart my-2 mx-4" src={cart} alt="Cart" /></Link>
        <Link to="/login">
          <button className="Signin" type="button">Sign in</button>
        </Link>
        <Link to="/signup">
          <button className="Signup mx-2" type="button">Sign up</button>
        </Link>
      </div>
    </nav>
  );
}
