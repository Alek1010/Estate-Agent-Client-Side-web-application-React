import React from 'react';
import './Services.css';
import consultationIcon from '../Images/consultation.svg';
import valuationIcon from '../Images/valuation.png';
import marketingIcon from '../Images/marketingIcon.svg';
import { useNavigate } from 'react-router-dom'; 

const ServicesPage = () => {
    const navigate = useNavigate(); // Initialize the navigation hook

  
    const handleContactNavigate = () => {
      navigate('/contactUs'); // Navigate to the ContactUs page
    };


  return (
    <div className="services-page">
      {/* Intro Section */}
      <section className="intro-section">
        <h1>Our Premium Services</h1>
        <p>
          Discover how we can assist you in achieving your property dreams. From expert consultations to effective marketing, 
          we are here to provide a seamless experience.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-grid">
        <div className="service">
          <div className="service-icon">
            <img src={consultationIcon} alt="Consultation" />
          </div>
          <h3>Personalized Consultation</h3>
          <p>
            Work one-on-one with our property experts to get tailored advice that matches your needs and goals.
          </p>
        </div>
        <div className="service">
          <div className="service-icon">
            <img src={valuationIcon} alt="Home Valuation" />
          </div>
          <h3>Accurate Home Valuation</h3>
          <p>
            Our professional valuations help you understand the true value of your property in today’s market.
          </p>
        </div>
        <div className="service">
          <div className="service-icon">
            <img src={marketingIcon} alt="Marketing Strategies" />
          </div>
          <h3>Strategic Marketing</h3>
          <p>
            Let us showcase your property with innovative campaigns designed to attract the perfect buyer.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-section">
        <h2>Let's Work Together</h2>
        <p>
          Whether you’re buying, selling, or just exploring options, we’re here to help. Contact us to get started today.
        </p>
        <button className="contact-button" onClick={handleContactNavigate}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
