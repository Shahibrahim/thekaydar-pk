// src/pages/Success.js
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Success = () => {
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        clearCart(); // Automatically clear cart on successful payment
    }, []);

    return (
        <div className="payment-status-page" style={styles.container}>
            <h1 style={styles.heading}>🎉 Payment Successful!</h1>
            <p style={styles.message}>
                Thank you for your purchase. Your order has been confirmed.
            </p>
            <Link to="/" className="btn" style={styles.button}>
                Return to Home
            </Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "2rem auto",
    },
    heading: {
        fontSize: "2rem",
        color: "#4CAF50",
        marginBottom: "1rem",
    },
    message: {
        fontSize: "1.2rem",
        color: "#555",
        marginBottom: "1.5rem",
    },
    button: {
        display: "inline-block",
        padding: "0.8rem 1.5rem",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#4CAF50",
        border: "none",
        borderRadius: "4px",
        textDecoration: "none",
        cursor: "pointer",
    },
};

export default Success;
