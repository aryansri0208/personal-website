import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/NavBar";
import "./ProjectDetails.css";

const projectData = {
  Grocio: {
    title: "Grocio",
    subtitle: "AI-Powered Pantry Assistant",
    description: "Grocio is an AI-powered pantry assistant that tracks inventory, reduces food waste, and simplifies grocery planning. Built with Flutter, it uses Firebase for authentication and Firestore for data storage. OpenAI's GPT powers recipe suggestions, and a chatbot assists with meal planning. WorkManager and Flutter Local Notifications automate reminders for expiring or low-stock items.",
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/grocio" }
    ],
    gallery: [
      "https://example.com/grocio-image1.jpg",
      "https://example.com/grocio-image2.jpg",
      "https://www.youtube.com/embed/example-video1"
    ]
  },
  Investment_Advisor: {
    title: "Investment Advisor",
    subtitle: "AI-Based Investment Predictions",
    description: "An AI-driven investment advisory system that predicts stock trends using Prophet forecasting and machine learning models.",
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri008/investment-advisor" }
    ],
    gallery: [
      "https://example.com/investment-image1.jpg",
      "https://www.youtube.com/embed/example-video2"
    ]
  },
  ECE_Soft: {
    title: "Trustworthy Module Registry",
    subtitle: "Secure Internal Package Management",
    description: "A reliable and secure internal package management system for software teams, enhancing module security and maintainability.",
    links: [
      { text: "Project Documentation", url: "https://example.com/docs" }
    ],
    gallery: [
      "https://example.com/ece-soft-image1.jpg",
      "https://www.youtube.com/embed/example-video3"
    ]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="container">
        <Nav />
        <h2 className="not-found">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <Nav />
      <div className="project-details-container">
        <h1 className="project-title">{project.title}</h1>
        <h2 className="project-subtitle">{project.subtitle}</h2>
        
        <div className="project-content">
          <p className="project-description">{project.description}</p>

          {/* Links Section */}
          <div className="project-links">
            {project.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-theme"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Gallery Section */}
          <div className="project-gallery">
            {project.gallery.map((media, index) => (
              media.includes("youtube") ? (
                <iframe 
                  key={index} 
                  width="560" 
                  height="315" 
                  src={media} 
                  title={`Video ${index + 1}`} 
                  allowFullScreen 
                  className="gallery-video"
                ></iframe>
              ) : (
                <img 
                  key={index} 
                  src={media} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="gallery-image" 
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

