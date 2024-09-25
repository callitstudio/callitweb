import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <h3>CONTACT INFORMATION</h3>
          <p>Say something to start a live chat!</p>
          <div className="contact-icons">
            <i className="fas fa-phone"></i>
            <i className="fas fa-comment"></i>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form">
          <h2>CONTACT US</h2>
          <p>Any question or remarks? Just write us a message!</p>
          <form>
            <div className="input-row">
              <input type="text" name="firstName" placeholder="First Name" required />
              <input type="text" name="lastName" placeholder="Last Name" required />
            </div>
            <div className="input-row">
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="phone" placeholder="Phone Number" required />
            </div>
            <div className="subject">
              <label>Select subject:</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="subject" value="General Inquiry" defaultChecked /> General Inquiry
                </label>
                <label>
                  <input type="radio" name="subject" value="Support" /> Support
                </label>
                <label>
                  <input type="radio" name="subject" value="Feedback" /> Feedback
                </label>
              </div>
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
