import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  { id: "Grocio", title: "Grocio", description: "Grocio is an AI-powered pantry assistant that tracks inventory, reduces food waste, and simplifies grocery planning. Built with Flutter, it uses Firebase for authentication and Firestore for data storage. OpenAI’s GPT powers recipe suggestions, and a chatbot assists with meal planning. WorkManager and Flutter Local Notifications automate reminders for expiring or low-stock items.", image: `${process.env.PUBLIC_URL}/grocio.png` },
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
