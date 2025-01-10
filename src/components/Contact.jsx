import React, { useState } from 'react';
import '../style/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const [error, setError] = useState('');
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        setError('Please fill out all fields.');
        return;
      }
  
      // Create a mailto link
      const subject = `Message from ${formData.name}`;
      const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
      const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
      // Open the user's email client
      window.location.href = mailtoLink;
    };
  
    return (
      <div className="contact">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            />
          </div>
  
          {error && <p className="error">{error}</p>}
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;