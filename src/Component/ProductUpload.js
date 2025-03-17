import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"; // Adjust path if needed
import backgroundImage from "../Images/product-placeholder.jpeg"; // Background Image

const ProductUpload = () => {
  return (
    <div className="product-upload-container">
      {/* Navbar */}
      <nav className="product-upload-navbar">
        <div className="product-upload-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="product-upload-links">
          <Link to="#">All Categories</Link>
          <Link to="#">Featured Selections</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="product-upload-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </nav>

      {/* Background Section */}
      <div
        className="product-upload-header"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2>Expand your business in an easy way</h2>
      </div>

      {/* Main Section */}
      <div className="product-upload-content">
        {/* Left Section - Product Details */}
        <div className="product-upload-details">
          <h3>Add Details</h3>
          <input type="text" placeholder="Product Name" />
          <textarea placeholder="Description"></textarea>
          <input type="text" placeholder="Product Category" />
          <input type="text" placeholder="Product Brand" />

          <div className="product-upload-multi-input">
            <button className="small-input">Weight</button>
            <button className="small-input">Size</button>
          </div>

          <div className="product-upload-multi-input">
            <button className="small-input">Price</button>
            <button className="small-input">More</button>
          </div>
        </div>

        {/* Right Section - Related Images */}
        <div className="product-upload-images">
          <h3>Related Images</h3>
          <div className="image-placeholder">
            <div className="large-img"></div>
            <div className="small-imgs">
              <div className="small-img"></div>
              <div className="small-img"></div>
            </div>
            <div className="large-img"></div>
            <div className="small-imgs">
              <div className="small-img"></div>
              <div className="small-img"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Button */}
      <div className="product-upload-button">
        <button>Update</button>
      </div>
    </div>
  );
};

export default ProductUpload;
