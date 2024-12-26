// import React from 'react';
// import './ContactUs.css'; 
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const ContactUs = () => {
//   return (
//     <>
//       {/* <div className='Contactheading'>
//         <h2>CONTACT US</h2>
//         <p>Any question or remarks? Just write us a message!</p>
//       </div> */}

//       <section className="contact-section">
//         <div className="contact-container">
//           {/* Left Side: Contact Information */}
//           <div className="contact-info">
//             <h3>CONTACT INFORMATION</h3>
//             <p>Say something to start a live chat!</p>
//             <div className="contact-icons">
//               <i className="fas fa-phone">
//                 <span>03xx-xxxxxxx</span>
//               </i>
//               <i className="fas fa-comment">
//                 <span>callitstudio@gmail.com</span>
//               </i>
//               <i className="fas fa-map-marker-alt">
//                 <span>Lahore</span>
//               </i>
//             </div>
//             <div className="social-icons">
//               <i className="fab fa-linkedin"></i>
//               <i className="fab fa-facebook-f"></i>
//               <i className="fab fa-instagram"></i>
//             </div>
//           </div>

//           {/* Right Side: Contact Form */}
//           <div className="contact-form">
//             <form>
//               <div className="input-row">

//                 <div className='inputs'>
//                 <label htmlFor="">First Name</label>
//                 <input type="text" name="firstName"  required />
//                 </div>

//                 <div className='inputs'>
//                 <label htmlFor="">Last Name</label>
//                 <input type="text" name="lastName"  required />
//                 </div>

//               </div>

//               <div className="input-row">

//                 <div className='inputs'>
//                   <label htmlFor="">Email</label>
//                 <input type="email" name="email"  required />
//                 </div>

//                 <div className='inputs'>
//                 <label htmlFor="">Phone Number</label>
//                 <input type="text" name="phone"  required />
//                 </div>

//               </div>


//               <div className="subject">
//                 <label>Select subject:</label>

//                 <div className="radio-group">
//                   <label>
//                     <input type="radio" name="subject" value="General Inquiry" defaultChecked /> General Inquiry
//                   </label>
//                   <label>
//                     <input type="radio" name="subject" value="Support" /> Support
//                   </label>
//                   <label>
//                     <input type="radio" name="subject" value="Feedback" /> Feedback
//                   </label>
//                 </div>
//               </div>
//               <button type="submit" className="send-btn">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactUs;


import React, { useState } from "react";
import "./ContactUs.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
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
            <a href="https://www.linkedin.com/company/105078802/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61565896494106" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/callitstudio/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {/* First Name and Last Name */}
            <div className="input-row">
              <div className="inputs">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputs">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="input-row">
              <div className="inputs">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputs">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="subject">
              <label>Select subject:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    checked={formData.subject === "General Inquiry"}
                    onChange={handleChange}
                  />
                  General Inquiry
                </label>
                <label>
                  <input
                    type="radio"
                    name="subject"
                    value="Support"
                    checked={formData.subject === "Support"}
                    onChange={handleChange}
                  />
                  Support
                </label>
                <label>
                  <input
                    type="radio"
                    name="subject"
                    value="Feedback"
                    checked={formData.subject === "Feedback"}
                    onChange={handleChange}
                  />
                  Feedback
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
