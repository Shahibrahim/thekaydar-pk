import React, { useState } from "react";
// Optional: If you want to keep your styles separate

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message);

      // Clear form
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="overlay"></div>
      <div className="contact-content">
        <h3 className="contact-title">Contact Us</h3>
        <h1 className="contact-heading">Get in touch today</h1>
        <p className="contact-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Please type your message here..."
            className="textarea-field"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-button">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
