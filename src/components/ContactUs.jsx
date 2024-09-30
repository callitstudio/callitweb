import React from 'react';
import './ContactUs.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  return (
    <>
      <div className='Contactheading'>
        <h2>CONTACT US</h2>
        <p>Any question or remarks? Just write us a message!</p>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side: Contact Information */}
          <div className="contact-info">
            <h3>CONTACT INFORMATION</h3>
            <p>Say something to start a live chat!</p>
            <div className="contact-icons">
              <i className="fas fa-phone">
                <span>03xx-xxxxxxx</span>
              </i>
              <i className="fas fa-comment">
                <span>callitstudio@gmail.com</span>
              </i>
              <i className="fas fa-map-marker-alt">
                <span>Lahore</span>
              </i>
            </div>
            <div className="social-icons">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form">
            <form>
              <div className="input-row">

                <div className='inputs'>
                <label htmlFor="">First Name</label>
                <input type="text" name="firstName"  required />
                </div>

                <div className='inputs'>
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName"  required />
                </div>

              </div>

              <div className="input-row">
                
                <div className='inputs'>
                  <label htmlFor="">Email</label>
                <input type="email" name="email"  required />
                </div>

                <div className='inputs'>
                <label htmlFor="">Phone Number</label>
                <input type="text" name="phone"  required />
                </div>

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
    </>
  );
};

export default ContactUs;
