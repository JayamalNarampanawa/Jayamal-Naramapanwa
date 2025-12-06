import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="contact container">
      <h1>Get In Touch</h1>
      <p className="contact-intro">Have a question or want to work together?</p>
      
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
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
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="status-message success">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="status-message error">Failed to send message. Please try again.</p>
          )}
        </form>
        
        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-item">
            <h3>Email</h3>
            <a href="mailto:ajnarampanawa2@gmail.com" className="contact-link">
              <FaEnvelope className="contact-icon" />
              ajnarampanawa2@gmail.com
            </a>
          </div>
          
          <div className="info-item">
            <h3>WhatsApp</h3>
            <a href="https://wa.me/94765679307" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaWhatsapp className="contact-icon" />
              +94 76 567 9307
            </a>
          </div>
          
          <div className="info-item">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jayamal-narampanawa-b7a0a0127" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/share/1AG2DhQWhD/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook className="social-icon" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/jayamal_narampanawa" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram className="social-icon" />
                <span>Instagram</span>
              </a>
              <a href="https://www.youtube.com/@jayamalnarampanawa" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube className="social-icon" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
