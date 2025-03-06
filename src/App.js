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
import Login from "./Component/Login"; // Import the Login page
import "./Styles/Signup.css";
import Signup from "./Component/Signup";

export default function App() {
  return (
    <Router>
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
            
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

