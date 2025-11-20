import React from 'react';
import './Home.css';
import profilePic from '../assets/dp.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src={profilePic} alt="Profile" className="profile-image" />
          </div>
          <h1 className="hero-title">Hi, I'm [Your Name]</h1>
          <p className="hero-subtitle">Full Stack Developer | Designer | Problem Solver</p>
          <p className="hero-description">
            I create beautiful, functional, and user-friendly web applications.
            Passionate about clean code and innovative solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
      
      <div className="skills-section container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML5, CSS3, Responsive Design</p>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Firebase, REST APIs, Authentication</p>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, VS Code, Firebase Console, Chrome DevTools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
