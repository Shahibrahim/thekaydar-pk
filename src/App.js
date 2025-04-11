import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import "./Styles/Hero.css";
import Secondsec from "./Component/Secondsec";
import "./Styles/Secondsec.css";
import Thirdsec from "./Component/Thirdsec";
import "./Styles/Thirdsec.css";
import ExtracellularServices from "./Component/Extracircularservices";
import "./Styles/Extracircularservices.css";
import Fifthsec from "./Component/Fifthsec";
import "./Styles/Fifth.css";
import ContactForm from "./Component/ContactForm";
import "./Styles/ContactForm.css";
import FAQ from "./Component/FAQ";
import "./Styles/FAQ.css";
import Footer from "./Component/Footer";
import "./Styles/Footer.css";
import Login from "./Component/Login"; 
import "./Styles/Signup.css";
import Signup from "./Component/Signup";
import "./Styles/Signupsupp.css";
import SignupSupp from "./Component/SignupSupp";
import "./Styles/BusinessForm.css";
import BusinessForm from "./Component/BusinessForm";
import "./Styles/Landingpage.css";
import LandingPage from "./Component/Landingpage";
import Product from "./Component/Product";  
import "./Styles/Product.css";
import ProductDetail from "./Component/ProductDetail";
import "./Styles/ProductDetail.css";
import Cart from "./Component/Cart";
import "./Styles/Cart.css";
import ProductUpload from "./Component/ProductUpload";
import "./Styles/Productupload.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-page" element={
          <>
            <LandingPage />
            <Footer />
          </>
        } />
        <Route path="/product-page" element={
          <>
            <Product />
            <Footer />
          </>
        } />

        <Route path="/product-detail" element={
          <>
            <ProductDetail />
            <Footer />
          </>
        } />

        <Route path="/cart" element={ 
          <>
            <Cart />
            <Footer />
          </>
        } />

        <Route path="/product-upload" element={
          <>
            <ProductUpload />
            <Footer />
          </>
        } />

        <Route path="*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/App" element={
                <>
                  <Hero />
                  <Secondsec />
                  <Thirdsec />
                  <ExtracellularServices />
                  <Fifthsec />
                  <ContactForm />
                  <FAQ />
                  <Footer />
                </>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signup-supp" element={<SignupSupp />} />
              <Route path="/business-form" element={<BusinessForm />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}


