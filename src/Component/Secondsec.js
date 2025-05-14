import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Arrow2 from "../Images/arrow2.svg";

export default function Secondsec({ hideSection = false }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products?limit=3");
        const data = await response.json();
        console.log("Fetched Products in Secondsec:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching limited products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleViewAll = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("You need to sign in or sign up to view all products.");
      navigate("/login");  // Redirect to login page if not signed in
    }
  };

  return (
    <div className="secondsec">
      <h1>Discover The Products You Need</h1>
      <p>
        From cutting-edge technology to everyday essentials, find<br />
        products that enhance your lifestyle and drive your success.<br />
        Start discovering today!
      </p>

      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card mx-4 text-center">
              <img
                src={product.images?.[0] || "../Images/product.svg"}
                alt={product.name}
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>Rs.{product.price}</h4>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {!hideSection && (
        <div className="viewall">
          <button type="button" onClick={handleViewAll}><b>View All</b></button>
          <img src={Arrow2} alt="arrow" />
        </div>
      )}
    </div>
  );
}
