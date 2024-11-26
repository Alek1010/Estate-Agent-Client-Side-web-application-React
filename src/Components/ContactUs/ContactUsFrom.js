import React, { useRef, useState } from "react";
import * as emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import "./ContactUs.css";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sjgvyef",
        "template_lhh57u6",
        form.current,
        "6vLY1F2AYL9BslJi8"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        () => {
          alert("Email sending failed. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Fill out the form below to get in touch
          with us.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
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
        <div className="form-group">
          <label htmlFor="date">Preferred Contact Date</label>
          <DatePicker placeholder="Select a date" />
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
