import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"; // Adjust path if needed

const ProductDetail = () => {
  return (
    <div className="productDetail-container">
      {/* Navbar */}
      <nav className="productDetail-navbar">
        <div className="productDetail-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="productDetail-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="productDetail-breadcrumbs">
        <Link to="/">Products</Link> &gt;
        <Link to="/category"> Hardware </Link> &gt;
        <span>PVC Sheet</span>
      </div>

      {/* Main Product Section */}
      <div className="productDetail-main">
        <div className="productDetail-images">
          <div className="productDetail-thumbnail-container">
            <div className="productDetail-thumbnail"></div>
            <div className="productDetail-thumbnail"></div>
            <div className="productDetail-thumbnail"></div>
            <div className="productDetail-thumbnail"></div>
          </div>
          <div className="productDetail-main-image"></div>
        </div>

        <div className="productDetail-info">
          <h2>PVC Sheet</h2>
          <p className="productDetail-rating">
            ⭐⭐⭐⭐⭐ (98 Reviews) | <span className="productDetail-stock">In stock</span>
          </p>
          <h3 className="productDetail-price">RS: 3900</h3>
          <p className="productDetail-desc">
            The perfect PVC sheet for insulation. Great durability and top-tier strength.
          </p>

          {/* Colors & Sizes */}
          <div className="productDetail-options">
            <div className="productDetail-colors">
              <p>Colours:</p>
              <span className="color-box color-1"></span>
              <span className="color-box color-2"></span>
              <span className="color-box color-3"></span>
            </div>

            <div className="productDetail-sizes">
              <p>Size:</p>
              <button className="size-btn">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
            </div>
          </div>

          {/* Quantity & Buy Button */}
          <div className="productDetail-purchase">
            <input type="number" min="1" defaultValue="1" className="productDetail-quantity" />
            <button className="productDetail-buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="productDetail-related">
        <h2>🔶 Related Items</h2>
        <div className="productDetail-related-items">
          <div className="related-card"></div>
          <div className="related-card"></div>
          <div className="related-card"></div>
          <div className="related-card"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
