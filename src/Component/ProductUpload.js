import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import backgroundImage from "../Images/product-placeholder.jpeg";

const ProductUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    weight: "",
    size: "",
    price: "",
    more: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async () => {
    if (images.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    try {
      const uploadedImageUrls = [];

      for (let image of images) {
        const formData = new FormData();
        formData.append("file", image);

        const imageRes = await fetch("http://localhost:5000/api/products/upload-image", {
          method: "POST",
          body: formData,
        });

        const imageResult = await imageRes.json();

        if (!imageRes.ok) {
          throw new Error(imageResult.message || "Image upload failed");
        }

        uploadedImageUrls.push(imageResult.imageUrl);
      }

      const productData = {
        ...formData,
        images: uploadedImageUrls,
      };

      const productRes = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const result = await productRes.json();

      if (productRes.ok) {
        alert("✅ Product uploaded successfully!");
      } else {
        alert(result.message || "❌ Failed to upload product.");
      }
    } catch (err) {
      alert("❌ Error uploading product.");
      console.error(err);
    }
  };

  return (
    <div className="product-upload-container">
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

      <div
        className="product-upload-header"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2>Expand your business in an easy way</h2>
      </div>

      <div className="product-upload-content">
        <div className="product-upload-details">
          <h3>Add Details</h3>
          <input type="text" name="name" placeholder="Product Name" onChange={handleChange} />
          <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
          <input type="text" name="category" placeholder="Product Category" onChange={handleChange} />
          <input type="text" name="brand" placeholder="Product Brand" onChange={handleChange} />
          <input type="text" name="weight" placeholder="Weight" onChange={handleChange} />
          <input type="text" name="size" placeholder="Size" onChange={handleChange} />
          <input type="text" name="price" placeholder="Price" onChange={handleChange} />
          <input type="text" name="more" placeholder="More" onChange={handleChange} />

          <div className="image-upload-section">
            <h4>Upload Product Images</h4>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <div className="product-upload-button">
          <button onClick={handleSubmit}>Upload Product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductUpload;