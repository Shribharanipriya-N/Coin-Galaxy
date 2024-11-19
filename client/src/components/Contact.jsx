import React from 'react';
import '../index.css';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:coingalaxy2k24@gmail.com';
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/place/Sri+Eshwar+College+of+Engineering,+Coimbatore/@10.8264327,77.0606885,15z/data=!4m6!3m5!1s0x3ba84ee37569ae7f:0x3c5b1824b6e79192!8m2!3d10.827908!4d77.0605168!16s%2Fg%2F1tdyp6pq?entry=ttu', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? We're here to help! Contact our friendly customer support team for personalized assistance or inquiries about our products and services.
      </p>
      <div className="contact-options">
        <div className="contact-option" onClick={handleEmailClick}>
        <p>Email Us</p>
          <span role="img" aria-label="Email">  ✉  coingalaxy2k24@gmail.com</span>
          
        </div>
        <div className="contact-option" onClick={handleLocationClick}>
        <p>Location</p>
          <span role="img" aria-label="Location">📍Coimbatore, Tamil Nadu 641202</span>
          
        </div>
        <div className="contact-option" onClick={handlePhoneClick}>
        <p>Call Us</p>
          <span role="img" aria-label="Phone">📞  +1234567890</span>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;