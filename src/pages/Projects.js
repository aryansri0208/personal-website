import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/NavBar.js"
import "./Projects.css"; // Assuming you have the updated CSS file

const projects = [
  {
    id: "Grocio",
    title: "Grocio",
    description: "AI Powered Pantry Assistant",
    image: "grocio.jpg"
  },
  {
    id: "CovidAnalysis",
    title: "Public Insights on COVID19 Vaccination using Exploratory and Sentiment Analysis on tweets",
    description: "(2020-21) This research was conducted under the guidance of Prof. Jaideep Srivastava (Department of CSE, University of...)",
    image: "/covid_analysis.jpg"
  },
  {
    id: "SocialDistancingAI",
    title: "AI-based Social Distance Monitoring Application for COVID",
    description: "(2020) In this project, I combined Python with deep learning and computer vision to monitor social distancing...",
    image: "/social_distance_ai.jpg"
  },
  {
    id: "SocialDistancingAI",
    title: "AI-based Social Distance Monitoring Application for COVID",
    description: "(2020) In this project, I combined Python with deep learning and computer vision to monitor social distancing...",
    image: "/social_distance_ai.jpg"
  },
  {
  id: "SocialDistancingAI",
  title: "AI-based Social Distance Monitoring Application for COVID",
  description: "(2020) In this project, I combined Python with deep learning and computer vision to monitor social distancing...",
  image: "/social_distance_ai.jpg"
  }
];

const Projects = () => {
  return (
    <div className="container">
      {/* Top Navigation Bar */}
       {/* Add the Nav component here */}
       <Nav />

      {/* Research & Projects Header */}
      <h2>My Projects and Publications</h2>

      {/* Project Cards */}
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.image && (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
            <div className="project-info">
              <Link 
                to={`/projects/${project.id}`} 
                className={`project-title ${project.highlight ? 'highlight' : ''}`}
              >
                {project.title}
              </Link>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
