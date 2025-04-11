import React, { useState } from 'react';
import hero from "../Images/hero.svg";
import search from "../Images/search.svg";
import Arrow from "../Images/arrow.svg";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <img className='heroimg' src={hero} alt="Hero" />

      {/* Navbar Section */}
      <div className="navbar">
        {/* Hamburger Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation Lists (toggle based on menuOpen state) */}
        <nav className={menuOpen ? "menu open" : "menu"}>
          <ul className='leftside'>
            <li><a href="/"><b>All Categories</b></a></li>
            <li><a href="/"><b>Featured Selections</b></a></li>
            <li><a href="/"><b>Contact</b></a></li>
          </ul>
          <ul className='rightside'>
            <li><a href="/"><b>Help Center</b></a></li>
            <li><a href="/"><b>Solutions</b></a></li>
            <li><a href="/"><b>AI Chatbot</b></a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="subhero">
        <h1>The leading B2C ecommerce <br /> platform for local trade</h1>

        {/* Search Bar */}
        <div className="search my-5">
          <input type="search" id="search" />
          <img className="searchimg" src={search} alt="Search" />
        </div>

        {/* Buttons */}
        <div className="buttons">
          <div className="started mx-4">
            <button className="getstarted">Get Started</button>
            <img className="Arrow" src={Arrow} alt="Arrow" />
          </div>
          <button className="talktosales">Talk to Sales</button>
        </div>
      </div>
    </div>
  );
}
