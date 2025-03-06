import React from "react";
    

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="overlay"></div>
      <div className="contact-content">
        <h3 className="contact-title">Contact Us</h3>
        <h1 className="contact-heading">Get in touch today</h1>
        <p className="contact-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
        </p>
        
        <form className="contact-form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <textarea placeholder="Please type your message here..." className="textarea-field"></textarea>
          <button type="submit" className="send-button">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
