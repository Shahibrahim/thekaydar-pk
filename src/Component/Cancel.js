// src/pages/Cancel.js
import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
return (
    <div className="payment-status-page" style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "red" }}>❌ Payment Canceled</h1>
        <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
            Your payment was not completed. You can try again anytime.
        </p>
        <Link 
            to="/cart" 
            className="btn" 
            style={{
                display: "inline-block",
                padding: "0.8rem 1.5rem",
                fontSize: "1rem",
                color: "#fff",
                backgroundColor: "#007bff",
                borderRadius: "5px",
                textDecoration: "none",
                marginTop: "1rem"
            }}
        >
            Return to Cart
        </Link>
    </div>
);
};

export default Cancel;
