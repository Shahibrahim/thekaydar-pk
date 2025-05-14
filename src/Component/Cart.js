import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import logo from "../Images/logo.png";

// Define the exchange rate for PKR to USD
const exchangeRate = 0.0057; // Example: 1 PKR = 0.0057 USD (replace with real API data if needed)

const stripePromise = loadStripe("pk_test_51RMuGV07EK6oy0YTfY198lOplZ6sCRUZdD5ryIKvK4NJzT7URZoQ2spsgDPInMVXVoPnS4lcD3j5HEoh8iAKdqMZ00bkzqDO22"); // Replace with your real key

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  // Convert subtotal from PKR to USD
  const subtotalInUSD = (subtotal * exchangeRate).toFixed(2);

  const handleQtyChange = (item, action) => {
    const newQty = action === "+" ? item.quantity + 1 : item.quantity - 1;
    if (newQty >= 1) {
      updateQuantity(item._id, newQty);
    }
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    try {
      const response = await fetch("http://localhost:5000/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to redirect to payment page.");
      }
    } catch (error) {
      console.error("Stripe checkout error:", error);
      alert("Payment error occurred.");
    }
  };

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

      <div className="cart-back">
        <button className="back-btn" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
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
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>Rs: {item.price}</td>
                  <td>
                    <button className="qty-btn" onClick={() => handleQtyChange(item, "-")}>-</button>
                    <input type="number" min="1" value={item.quantity} readOnly />
                    <button className="qty-btn" onClick={() => handleQtyChange(item, "+")}>+</button>
                  </td>
                  <td>Rs: {item.subtotal}</td>
                  <td>
                    <button onClick={() => removeFromCart(item._id)}>🗑️</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">🛒 Your cart is empty.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Cart Actions */}
      <div className="cart-actions">
        <Link to="/product-page" className="cart-btn return-shop">Return To Shop</Link>
        <button className="cart-btn update-cart" onClick={() => window.location.reload()}>Update Cart</button>
      </div>

      {/* Coupon & Cart Total */}
      <div className="cart-summary">
        <div className="cart-coupon">
          <input type="text" placeholder="Coupon Code" />
          <button className="cart-btn">Apply Coupon</button>
        </div>
        <div className="cart-total">
          <h3>Cart Total</h3>
          <p>Subtotal: <span>Rs: {subtotal}</span></p>
          <p>Shipping: <span>Free</span></p>
          <p><strong>Total:</strong> <span>Rs: {subtotal} (~${subtotalInUSD} USD)</span></p>
          <button className="cart-btn checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
