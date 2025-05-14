import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setAllProducts(data);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Filter on every keystroke
  useEffect(() => {
    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filtered);
  }, [searchQuery, allProducts]);

  return (
    <div className="product-page-container">
      <nav className="product-navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="product-logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li><a href="#">All Categories</a></li>
          <li><a href="#">Featured</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Solutions</a></li>
        </ul>
        <div className="navbar-icons">
          
        </div>
      </nav>

      <header className="product-hero">
        <div className="product-overlay"></div>
        <div className="product-hero-content">
          <h1>Products</h1>
          <p>Find the best quality materials for your business</p>
          <div className="product-search-bar">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Button now optional — since filtering happens on typing */}
            <button onClick={() => {}}>Search</button>
          </div>
        </div>
      </header>

      <section className="product-section">
        <h2 className="product-heading">Discover the Products</h2>
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="product-card"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                {product.images && product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="product-image"
                  />
                ) : (
                  <img
                    src="../Images/product.svg"
                    alt={product.name}
                    className="product-image"
                  />
                )}
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="product-price">Rs.{product.price}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">No products found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
