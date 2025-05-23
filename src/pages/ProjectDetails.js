import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/NavBar";
import "./ProjectDetails.css";

const projectData = {
  Grocio: {
    title: "Grocio",
    subtitle: "AI-Powered Pantry Assistant",
    description: [
      {
        type: "paragraph",
        content: "Grocio is an AI-based smart pantry management app that helps you track your groceries and household items, recommends recipes based on your pantry contents, and sends timely notifications for restocking and expiration dates."
      },
      {
        type: "heading",
        level: 3,
        content: "Cloud-Powered Real-Time Database"
      },
      {
        type: "list",
        items: [
          "Built on Firebase Firestore for instantaneous data synchronization",
          "Multi-device support with real-time updates across all user devices",
          "Efficient data modeling for pantry items, recipes, and user preferences",
          "Offline-first architecture ensuring functionality without internet connection",
          "Automatic conflict resolution for concurrent updates"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "AI-Powered Kitchen Assistant"
      },
      {
        type: "list",
        items: [
          "Integration with OpenAI's GPT-3.5 Turbo model for intelligent interactions",
          "Dynamic recipe generation based on:",
          "Real-time pantry inventory",
          "Ingredient expiration dates",
          "Available quantities",
          "Smart meal planning with:",
          "Contextual understanding of ingredients",
          "Quick meal suggestions",
          "Efficient use of available items",
          "Natural language processing for conversational interaction",
          "Adaptive responses based on user's pantry state"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Smart Notification System"
      },
      {
        type: "list",
        items: [
          "Multi-layered notification architecture using Flutter Local Notifications",
          "Background processing with WorkManager for reliable alerts",
          "Intelligent notification scheduling:",
          "Expiration date warnings",
          "Low inventory alerts",
          "Smart restocking suggestions",
          "Recipe recommendations based on available ingredients",
          "Meal prep reminders",
          "Custom notification categories with different priority levels",
          "User-configurable notification preferences"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Technical Implementation"
      },
      {
        type: "paragraph",
        content: "The app demonstrates advanced mobile development concepts including:"
      },
      {
        type: "list",
        items: [
          "Integration with OpenAI's API for intelligent recipe suggestions",
          "Real-time Firestore data streams",
          "Background task scheduling",
          "Complex data synchronization",
          "RESTful API integration",
          "Offline data persistence"
        ]
      },
      {
        type: "paragraph",
        content: "This project showcases my ability to integrate cutting-edge AI technology with practical mobile development, creating a powerful yet user-friendly application that solves real-world kitchen management challenges."
      }
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/grocio" }
    ],
    gallery: [
      `${process.env.PUBLIC_URL}/grocio_PurdueMoonshot.mp4`,
      `${process.env.PUBLIC_URL}/grocio(1).png`,
      `${process.env.PUBLIC_URL}/grocio(2).png`,
      `${process.env.PUBLIC_URL}/grocio(3).png`,
      `${process.env.PUBLIC_URL}/grocio(4).png`
    ]
  },
  Investment_Advisor: {
    title: "Investment Advisor",
    subtitle: "AI-Based Investment Predictions",
    description: [
      {
        type: "paragraph",
        content: "Stock Advisor is a comprehensive financial analysis platform that empowers investors with sophisticated tools for stock market analysis and forecasting. The application seamlessly integrates real-time market data from Yahoo Finance with advanced technical analysis capabilities and machine learning predictions."
      },
      {
        type: "heading",
        level: 3,
        content: "Key Capabilities"
      },
      {
        type: "heading",
        level: 3,
        content: "Real-time Market Analysis"
      },
      {
        type: "list",
        items: [
          "Live stock price tracking and visualization",
          "Interactive price charts with customizable time ranges",
          "Volume analysis for trading activity insights",
          "Multiple stock comparison and correlation analysis"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Technical Analysis Tools"
      },
      {
        type: "list",
        items: [
          "Moving averages (10, 20, and 50-day) for trend identification",
          "Daily return calculations and distribution analysis",
          "Trading volume patterns and anomaly detection",
          "Correlation heatmaps for portfolio diversification"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Advanced Forecasting"
      },
      {
        type: "list",
        items: [
          "Machine learning-powered price predictions using Facebook Prophet",
          "Trend decomposition and seasonality analysis",
          "Confidence intervals for forecasted values",
          "Rolling mean smoothing for better trend visualization"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "User Experience"
      },
      {
        type: "list",
        items: [
          "Clean, intuitive web interface built with Streamlit",
          "Fast, responsive backend powered by FastAPI",
          "Flexible data range selection",
          "Support for multiple stock analysis",
          "Export capabilities for data and visualizations"
        ]
      },
      {
        type: "paragraph",
        content: "The application is built on a modern tech stack including FastAPI, Streamlit, and Prophet, making it both powerful and user-friendly. It's designed for both casual investors looking to understand market trends and experienced traders requiring detailed technical analysis."
      }
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri008/investment-advisor" }
    ],
    gallery: [
      "AAPL_Prophet_Prediction.png"
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

  const renderContent = (content) => {
    switch (content.type) {
      case "paragraph":
        return <p className="project-description">{content.content}</p>;
      case "heading":
        const HeadingTag = `h${content.level}`;
        return <HeadingTag className="project-heading">{content.content}</HeadingTag>;
      case "list":
        return (
          <ul className="project-list">
            {content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Nav />
      <div className="project-details-container">
        <h1 className="project-title">{project.title}</h1>
        <h2 className="project-subtitle">{project.subtitle}</h2>
        
        <div className="project-content">
          {project.description.map((section, index) => (
            <div key={index}>{renderContent(section)}</div>
          ))}

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
              media.includes(".mp4") ? (
                <video 
                  key={index}
                  controls
                  className="gallery-video"
                >
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img 
                  key={index} 
                  src={media} 
                  alt={`Grocio screenshot ${index + 1}`}
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

