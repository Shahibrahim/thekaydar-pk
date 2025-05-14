import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const SingleProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        console.error("❌ Product ID is undefined");
        return;
      }

      try {
        const res = await fetch(`http://localhost:5000/api/products/${productId}`);
        const data = await res.json();
        setProduct(data);

        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }

        // Fetch all products to determine related items
        const relatedRes = await fetch("http://localhost:5000/api/products");
        const allProducts = await relatedRes.json();

        const related = allProducts.filter(
          (p) => p._id !== productId && (p.category === data.category || p.brand === data.brand)
        );

        setRelatedProducts(related.slice(0, 4)); // Show max 4 related products
      } catch (err) {
        console.error("Failed to fetch product or related items:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div className="loading">Loading...</div>;

  const handleQuantityChange = (type) => {
    if (type === "increment") setQuantity((prev) => prev + 1);
    else if (type === "decrement" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, true);
    navigate("/cart");
  };

  const handleFavoriteToggle = () => setIsFavorite(!isFavorite);

  return (
    <div className="single-product-container">
      <div className="product-detail-wrapper">
        {/* Left - Gallery */}
        <div className="left-gallery">
          <div className="thumbnail-column">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="thumb"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          {selectedImage ? (
            <img src={selectedImage} alt={product.name} className="main-image" />
          ) : (
            <div>No image available</div>
          )}
        </div>

        {/* Right - Details */}
        <div className="right-details">
          <h2>{product.name}</h2>
          <div className="reviews">
            ⭐ 4.8 (50 Reviews) <span className="stock">| In Stock</span>
          </div>
          <div className="price">Rs. {product.price}</div>
          <p className="description">{product.description}</p>

          <div className="product-meta">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Weight:</strong> {product.weight}</p>
            <p><strong>More Info:</strong> {product.more}</p>
          </div>

          <div className="buy-section">
            <div className="quantity">
              <button onClick={() => handleQuantityChange("decrement")}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange("increment")}>+</button>
            </div>
            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            <button
              className={`favorite ${isFavorite ? "active" : ""}`}
              onClick={handleFavoriteToggle}
            >
              {isFavorite ? "❤️" : "♡"}
            </button>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div className="related-items">
        <h3>🔶 Related Items</h3>
        <div className="related-grid">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <div
                key={item._id}
                className="related-card"
                onClick={() => navigate(`/product/${item._id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="badge">New</div>
                <div className="card-icons">
                  <span>♡</span>
                  <span>👁️</span>
                </div>
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="related-thumb"
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                />
                <div className="card-info">
                  <p>{item.name}</p>
                  <div className="pricing">
                    <span className="discounted">Rs.{item.price}</span>
                  </div>
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))
          ) : (
            <p>No related items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
