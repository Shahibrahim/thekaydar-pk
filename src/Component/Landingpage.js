import React from "react";
import Meeting from "../Images/Meeting.jpeg";
import Insights from "../Images/Insights.jpeg";
import Ai from "../Images/AI.jpeg";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <nav className="navbar-landing">
        <div className="logo-container">
          <Link to="/">
            <div className="logo-landing">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
        </div>
        <Link to="/signup-supp"> <button className="sell-btn-landing">Start Selling</button></Link>
      </nav>

      <header className="hero-section-landing">
        <div className="hero-overlay"></div>
        <div className="hero-content-landing">
          <p>Sell on Thekaydar.pk</p>
          <h1>Scale your Business and go with one shop</h1>
           <Link to="/signup-supp">  
          <button className="hero-btn-landing">Start Selling now</button> </Link>
        </div>
      </header>

      <section className="features-section-landing">
        <h2>One platform, unlimited Business Sales</h2>
        <div className="features-container-landing">
          <div className="feature-card-landing">
            <h3>📢 Sales reach</h3>
            <p>Expand your online sales channels...</p>
          </div>

          <div className="feature-card-landing">
            <h3>🤖 AI tools</h3>
            <p>Do everything in one integrated workspace...</p>
          </div>

          <div className="feature-card-landing">
            <h3>📞 Local support</h3>
            <p>Get real-time onboarding and operational support...</p>
          </div>
        </div>
      </section>

      <div className="insights-wrapper">
        <h2 className="insights-title">Get powerful insights</h2>

        <div className="insights-cards-container">
          <div className="insight-card">
            <img src={Meeting} alt="Consulting Services" />
            <h3>Exclusive consulting services</h3>
            <button className="consult-btn-landing">Talk to a Consultant</button>
          </div>

          <div className="insight-card">
            <img src={Insights} alt="Business Insights" />
            <h3>Latest business insights</h3>
            <button className="learn-btn-landing">Learn more</button>
          </div>

          <div className="insight-card">
            <img src={Ai} alt="AI Assistance" />
            <h3>AI-powered tools</h3>
            <button className="ai-btn-landing">AI Assistance</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
