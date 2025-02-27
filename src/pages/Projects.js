import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  { id: "project1", title: "Project 1", description: "Brief description of project 1", image: "project1.jpg" },
  { id: "project2", title: "Project 2", description: "Brief description of project 2", image: "project2.jpg" },
  { id: "project3", title: "Project 3", description: "Brief description of project 3", image: "project3.jpg" }
];

const Projects = () => {
  return (
    <div className="container">
      <h2>All Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <p>{project.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
