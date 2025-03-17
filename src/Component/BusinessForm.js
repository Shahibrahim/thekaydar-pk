import React, { useState } from "react";

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    phoneNumber: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="business-form-container">
      <div className="form-section">
        <h2>Tell us more about your business</h2>
        <p>
          We'll use this information to offer you personalized business
          solutions.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <div className="phone-input">
            <span>+92</span>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Telephone or mobile number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="location-inputs">
            <input
              type="text"
              name="city"
              placeholder="City/town"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <button className="businessbtn" type="submit">Submit</button>
        </form>
      </div>

      <div className="image-section">
        <div className="overlay"></div>
        <h1 className="logo">Thekaydar</h1>
      </div>
    </div>
  );
};

export default BusinessForm;
