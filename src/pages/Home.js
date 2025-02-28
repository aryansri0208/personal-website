import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const projects = [
  { id: "Grocio", title: "Grocio", description: "Grocio is an AI-powered pantry assistant that tracks inventory, reduces food waste, and simplifies grocery planning. Built with Flutter, it uses Firebase for authentication and Firestore for data storage. OpenAI’s GPT powers recipe suggestions, and a chatbot assists with meal planning. WorkManager and Flutter Local Notifications automate reminders for expiring or low-stock items.", image: `${process.env.PUBLIC_URL}/grocio.png` },
  { id: "Investment_Advisor", title: "Investment Advisor", description: "Brief description of project 2", image: `${process.env.PUBLIC_URL}/AAPL_Prophet_Prediction.png` },
  { id: "ECE_Soft", title: "Trustworthy Module Registry ", description: "Brief description of project 3", image: `${process.env.PUBLIC_URL}/Internal Package Management .jpg` }
];

const tablaPerformances = [
  { videoUrl: "https://www.youtube.com/embed/ci5yyxhXsOs" },
  { videoUrl: "https://www.youtube.com/embed/1Qvl8hJyJwI" },
  { videoUrl: "https://www.youtube.com/embed/wbTZ3P1mymg" },
];

const Home = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>ARYAN SRIVASTAVA</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/tabla">Music</Link>
        </nav>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
            <img src={`${process.env.PUBLIC_URL}/your-photo.jpg`} alt="Aryan Srivastava" className="profile-pic" />
          <div className="about-text">
            <p>
            I am a professional nerd and a Computer Engineering student at Purdue University with a deep passion for software development and AI/ML. I thrive on building intelligent, scalable solutions, starting from simple technical fixes and growing them into fully operational businesses. My blend of entrepreneurial and technical skills allows me to develop AI-driven applications, automate processes, and optimize decision-making. Beyond tech, I enjoy playing badminton, basketball, and soccer. I also love music, experimenting with Tabla fusion on English songs, combining traditional rhythms with modern beats to create unique soundscapes.
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
        <div className="more-button">
          <Link to="/projects" className="btn btn-theme">More Projects</Link>
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
        <div className="more-button">
          <Link to="/tabla" className="btn btn-theme">More Performances</Link>
        </div>
      </section>
    </div>
  );
};  

export default Home;