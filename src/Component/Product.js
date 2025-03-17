import React from "react";
import productImage from "../Images/product.svg"; // Placeholder image
import logo from "../Images/logo.png"; // Your company logo

const ProductPage = () => {
  const products = [
    { id: 1, name: "Hardware", description: "All the tools you need", price: "$20.00" },
    { id: 2, name: "Paint", description: "Different shades available", price: "$30.00" },
    { id: 3, name: "Tiles", description: "Quality flooring options", price: "$20.00" },
    { id: 4, name: "Hardware", description: "All the tools you need", price: "$20.00" },
    { id: 5, name: "Paint", description: "Different shades available", price: "$30.00" },
    { id: 6, name: "Tiles", description: "Quality flooring options", price: "$20.00" },
  ];

  return (
    <div className="product-page-container">
      {/* Navbar */}
      <nav className="product-navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="product-logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#">All Categories</a></li>
          <li><a href="#">Featured</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Solutions</a></li>
        </ul>
        <div className="navbar-icons">
          <span>🔍</span>
          <span>🛒</span>
          <span>👤</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="product-hero">
        <div className="product-overlay"></div>
        <div className="product-hero-content">
          <h1>Products</h1>
          <p>Find the best quality materials for your business</p>
          <div className="product-search-bar">
            <input type="text" placeholder="Search for products..." />
            <button>Search</button>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <section className="product-section">
        <h2 className="product-heading">Discover the Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={productImage} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="product-price">{product.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
