import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "https://demo-link.com",
      repo: "https://github.com/username/project"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      demo: "https://demo-link.com",
      repo: "https://github.com/username/project"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization",
      tech: ["React", "API Integration", "Charts.js"],
      demo: "https://demo-link.com",
      repo: "https://github.com/username/project"
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
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
