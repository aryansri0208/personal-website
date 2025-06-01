import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/NavBar.js"
import "./Projects.css"; // Assuming you have the updated CSS file

const projects = [
  {
    id: "Grocio",
    title: "Grocio",
    description: " Grocio is an AI-based smart pantry management app that helps you track your groceries and household items, recommends recipes based on your pantry contents, and sends timely notifications for restocking and expiration dates.",
    image: "grocio.png"
  },
  {
    id: "ChessAI",
    title: "Human-Centric Chess Move Prediction with Skill-Aware Neural Networks",
    description: "Maia is an adaptive chess AI that plays at your skill level, built with PyTorch and neural networks. Challenge it through an interactive GUI interface for a personalized chess training experience.",
    image: "gui.png"
  },
  {
    id: "ECE362Project",
    title: "Gesture Controlled Ball Breaker Game",
    description: "This project implements a classic Brick Breaker game on an STM32F091 microcontroller, featuring gesture-based paddle control, a TFT LCD display, sound effects, and persistent high scores using external EEPROM.",
    image: "image.png"
  },
  {
    id: "Investment_Advisor",
    title: "Investment Advisor",
    description: "Stock Advisor is a real-time stock analysis tool that combines technical analysis with machine learning to help investors make data-driven decisions through interactive visualizations and predictive analytics.",
    image: "AAPL_Prophet_Prediction.png"
  },
  {
    id: "ECE_Soft",
    title: "Trustworthy Module Registry",
    description: "The Package Registrar CLI Tool is a Node.js-based command-line application that evaluates Node.js modules for trustworthiness using AWS services, providing developers with detailed metrics to ensure reliable module adoption.",
    image: "Internal Package Management .jpg"
  },
  {
    id: "VIPResearch",
    title: "Automated UAV Drone",
    description: "This project explores autonomous UAV navigation in mazes using ROS2, PX4, and Computer Vision for memory-efficient path-planning and collision avoidance.",
    image: "UAV.png"
  },
  {
    id: "ECE368",
    title: "Data Structures and Algorithms Course Work",
    description: "Implemented a series of data structures and algorithms (Shellsort, BST, HBT, graph pathfinding) with file I/O systems, while developing tree manipulations (rerooting, balancing) and memory management techniques for efficient data processing and storage.",
    image: "DSA.png"
  },
  {
    id: "ECE362",
    title: "Microprocessor Lab work",
    description: "This project contains a collection of embedded systems lab assignments (ECE362) covering topics from GPIO to RISC-V assembly programming, with each lab focusing on different aspects of microcontroller development and low-level programming.",
    image: "ECE362.jpeg"
  },
  {
    id: "ECE570",
    title: "Artificial Intelligence Course Work",
    description: "These assignments covered a comprehensive range of machine learning and deep learning topics, from logistic regression and neural networks to CNNs, density estimation, and attention mechanisms. Implemented using NumPy, scikit-learn, and PyTorch, the exercises emphasized both foundational theory and practical application on real-world datasets like MNIST, CIFAR-10, and Breast Cancer.",
    image: "ECE570.png"
  },
  {
    id: "ECE39595",
    title: "Object Oriented Programming (C++) Course Work",
    description: "This coursework (ECE-39595) is an Object-Oriented Programming course that implements a generic hash map data structure and a complete chess game system. The projects demonstrate core OOP concepts like inheritance, polymorphism, and encapsulation through practical implementations of data structures and game logic.",
    image: "ECE39595.png"
  },
  {
    id: "ECE270",
    title: "Digital System Design Course Work",
    description: "This project features a series of digital systems design labs for ECE-270, where students explore combinational and sequential logic, state machines, and hardware description languages. Through hands-on experiments and FPGA implementation, students gain practical experience in designing and testing digital circuits, reinforcing theoretical knowledge with real-world applications.",
    image: "ECE270.png"
  },
  {
    id: "ECE20875",
    title: "Python for Data Science Course Work",
    description: "This project contains coursework for ECE-20875, focusing on data analysis and machine learning projects.",
    image: "ECE20875.png"
  }
];

const Projects = () => {
  return (
    <div className="container">
      {/* Top Navigation Bar */}
       {/* Add the Nav component here */}
       <Nav />

      {/* Research & Projects Header */}
      <h2>My Projects and Coursework</h2>

      {/* Project Cards */}
      <div className="projects-list">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            {project.image && (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
            <div className="project-info">
              <div className={`project-title ${project.highlight ? 'highlight' : ''}`}>{project.title}</div>
              <p className="project-description">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
