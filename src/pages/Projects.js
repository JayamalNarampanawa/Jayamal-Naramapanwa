import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mobile Fitness App",
      description: "A front-end mobile application that operates with real-time data for fitness tracking and monitoring",
      tech: ["Mobile Development", "Real-time Data", "Frontend"],
      repo: "https://github.com/JayamalNarampanawa/Fitness-App.git"
    },
    {
      id: 2,
      title: "Agri-Bot",
      description: "A web application with a dashboard for agriculture sector, operates with real-time data from Firebase which collects important data from sensors",
      tech: ["Web Application", "Firebase", "IoT Sensors", "Dashboard"],
      repo: "https://github.com/JayamalNarampanawa/Agri-Bot.git"
    },
    {
      id: 3,
      title: "Library Management System",
      description: "A simple Library Management System built using Java for managing books, members, and library operations",
      tech: ["Java", "Desktop Application"],
      repo: "https://github.com/JayamalNarampanawa/Library-Management-System-.git"
    }
  ];

  return (
    <div className="projects container">
      <h1>My Projects</h1>
      <p className="projects-intro">Here are some of my recent works</p>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
