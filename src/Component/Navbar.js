import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="Navbar">
      <div>
        <Link to="/">
          <img className="logo mx-5" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="btns my-4 mx-5">
        <Link to="/cart">
          <img className="cart my-2 mx-4" src={cart} alt="Cart" />
        </Link>

        {user ? (
          <>
            <span className="mx-2">Hello, {user.username}</span>
            <button className="Signin mx-2" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="Signin" type="button">Sign in</button>
            </Link>
            <Link to="/signup">
              <button className="Signup mx-2" type="button">Sign up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
