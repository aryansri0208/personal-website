import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const projects = [
  { id: "project1", title: "Project 1", description: "Brief description of project 1", image: "project1.jpg" },
  { id: "project2", title: "Project 2", description: "Brief description of project 2", image: "project2.jpg" },
  { id: "project3", title: "Project 3", description: "Brief description of project 3", image: "project3.jpg" }
];

const tablaPerformances = [
  { videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1" },
  { videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2" },
  { videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3" }
];

const Home = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>ARYAN SRIVASTAVA</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Innovations</Link>
          <Link to="/tabla">Tabla</Link>
        </nav>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
            <img src={`${process.env.PUBLIC_URL}/your-photo.jpg`} alt="Aryan Srivastava" className="profile-pic" />

          <div className="about-text">
            <p>
              Aryan is a freshman at Purdue University, pursuing a Bachelor of Engineering in Computer Engineering. 
              He is an innovator by heart and mind who loves to solve problems using his skills in technology, 
              robotics, design thinking, and data science.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>RESEARCH & PROJECTS</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <p>{project.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tabla Performance Section */}
      <section className="tabla">
        <h2>TABLA PERFORMANCES</h2>
        <div className="tabla-slider">
          {tablaPerformances.map((performance, index) => (
            <iframe
              key={index}
              width="300"
              height="200"
              src={performance.videoUrl}
              title={`Tabla Performance ${index + 1}`}
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
