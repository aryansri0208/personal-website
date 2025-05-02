// pages/Music.js
import React from "react";
import Nav from "../components/NavBar"; // Import Nav component
import "./Music.css"; // Assuming you have a Music.css file for styling

const videos = [
  {
    id: "1",
    title: "Fusion of Tabla with English Music",
    description: "A fusion of Tabla and English music, creating a unique blend.",
    url: "https://www.youtube.com/embed/examplevideo1", // Replace with your actual YouTube embed link
  },
  {
    id: "2",
    title: "Live Tabla Performance",
    description: "A live performance of Tabla in a traditional setting.",
    url: "https://www.youtube.com/embed/examplevideo2", // Replace with your actual YouTube embed link
  },
  {
    id: "3",
    title: "Tabla and Beatbox Fusion",
    description: "A fusion of Tabla and beatboxing, an experimental performance.",
    url: "https://www.youtube.com/embed/examplevideo3", // Replace with your actual YouTube embed link
  },
];

const Music = () => {
  return (
    <div className="music-container">
      {/* Add the Nav component here */}
      <Nav />
      
      {/* Music Header */}
      <h2 className="music-header">My Music and Performances</h2>

      {/* Videos Grid */}
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
