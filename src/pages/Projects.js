import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: "Grocio",
    title: "Wireless advancements in Industrial instrumentation and monitoring",
    description: "(2021) Description: I worked as a research intern at ACKCIO (IoT-based startup that builds reliable wireless solutions for industrial...",
    image: "ackcio.jpg"
  },
  {
    id: "CovidAnalysis",
    title: "Public Insights on COVID19 Vaccination using Exploratory and Sentiment Analysis on tweets",
    description: "(2020-21) Description: This research was conducted under the guidance of Prof. Jaideep Srivastava (Department of CSE, University of...",
    image: "covid_analysis.jpg"
  },
  {
    id: "SocialDistancingAI",
    title: "AI-based Social Distance Monitoring Application for COVID",
    description: "(2020) Description: In this project, I have combined python with deep learning and computer vision to monitor social distancing...",
    image: "social_distance_ai.jpg"
  }
];

const Projects = () => {
  const location = useLocation();

  return (
    <div className="container">
      <nav className="top-nav">
        <h1 className="site-title">Aryan Srivastava</h1>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
          <Link to="/projects" className={`nav-link ${location.pathname.startsWith("/projects") ? "active" : ""}`}>Projects</Link>
          <Link to="/tabla" className={`nav-link ${location.pathname === "/tabla" ? "active" : ""}`}>Music</Link>
        </div>
      </nav>
      <h2>Research & Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <Link to={`/projects/${project.id}`} className="project-title">{project.title}</Link>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

