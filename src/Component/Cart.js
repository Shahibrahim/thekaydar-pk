import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"; // Adjust path if needed

const Cart = () => {
  return (
    <div className="cart-container">
      {/* Navbar */}
      <nav className="cart-navbar">
        <div className="cart-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="cart-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </nav>

      {/* Back Button */}
      <div className="cart-back">
        <Link to="/">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
      </div>

      {/* Cart Table */}
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tile 3x2</td>
              <td>RS: 1750</td>
              <td>
                <button className="qty-btn">-</button>
                <input type="number" min="1" defaultValue="1" />
                <button className="qty-btn">+</button>
              </td>
              <td>RS: 1750</td>
            </tr>
            <tr>
              <td>PVC Sheet</td>
              <td>RS: 3900</td>
              <td>
                <button className="qty-btn">-</button>
                <input type="number" min="1" defaultValue="2" />
                <button className="qty-btn">+</button>
              </td>
              <td>RS: 7800</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cart Actions */}
      <div className="cart-actions">
        <button className="cart-btn return-shop">Return To Shop</button>
        <button className="cart-btn update-cart">Update Cart</button>
      </div>

      {/* Coupon & Cart Total */}
      <div className="cart-summary">
        <div className="cart-coupon">
          <input type="text" placeholder="Coupon Code" />
          <button className="cart-btn">Apply Coupon</button>
        </div>
        <div className="cart-total">
          <h3>Cart Total</h3>
          <p>Subtotal: <span>RS: 9750</span></p>
          <p>Shipping: <span>Free</span></p>
          <p><strong>Total:</strong> <span>RS: 9750</span></p>
          <button className="cart-btn checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
