import React, { useState } from "react";
import "./ContactUs.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // State to store form data

  // Handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate the form fields
    if (formData.name && formData.email && formData.message) {
      // Display success message as an alert
      window.alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    } else {
      window.alert("Please fill in all fields correctly."); // Alert for validation error
    }
  };

  // Render the form
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Fill out the form below to contact us.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
