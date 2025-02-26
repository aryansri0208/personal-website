import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <header className="header">
        <h1>Your Name</h1>
        <p>Innovator | Musician | Technologist</p>
      </header>

      <section id="about">
        <img src="your-photo.jpg" alt="Your Photo" className="profile-pic" />
        <p>Hello! I am [Your Name], a passionate innovator and musician. Welcome to my portfolio.</p>
      </section>

      <section id="projects">
        <h2>Recent Projects</h2>
        <div className="project-container">
          <div className="project">
            <img src="project1.jpg" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
          <div className="project">
            <img src="project2.jpg" alt="Project 2" />
            <p>Project 2 Description</p>
          </div>
          <div className="project">
            <img src="project3.jpg" alt="Project 3" />
            <p>Project 3 Description</p>
          </div>
        </div>
      </section>

      <section id="tabla">
        <h2>Tabla Performances</h2>
        <div className="tabla-container">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
            title="Tabla Performance 1"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
            title="Tabla Performance 2"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
            title="Tabla Performance 3"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default App;
