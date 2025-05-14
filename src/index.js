import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import "./Styles/Login.css"
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./context/CartContext"; // adjust path as needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <App />
</CartProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
