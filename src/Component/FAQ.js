import React, { useState } from "react";
import Plus from "../Images/Plus.svg"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Thekaydar, and how does it work?",
      answer:
        "Thekaydar is a digital platform that simplifies the procurement of hardware products for home manufacturing. It connects buyers with reliable suppliers while integrating advanced technologies like VR cam measurements and AI assistance for a seamless experience.",
    },
    {
      question: "How does the VR Cam Technology help with measurements?",
      answer:
        "The VR Cam Technology enables precise measurements using augmented reality, reducing errors in home manufacturing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, bank transfers, and mobile payment solutions for seamless transactions.",
    },
    {
      question: "How do I become a registered supplier on Thekaydar?",
      answer:
        "To become a supplier, register on our platform, submit the required documents, and get verified by our team.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        If you need further assistance, feel free to reach out!
      </p>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <button className="faq-toggle">
                {openIndex === index ? "✖" : "➕"}
              </button>
            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
