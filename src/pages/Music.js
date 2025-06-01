// pages/Music.js
import React from "react";
import Nav from "../components/NavBar"; // Import Nav component
import "./Music.css"; // Assuming you have a Music.css file for styling

const videos = [
  {
    id: "1",
    title: "International Tabla Competition Performance",
    description: "Performed in Dubai at the ABSS International Tabla Competition and won the second position",
    url: "https://www.youtube.com/embed/ci5yyxhXsOs"
  },
  {
    id: "2",
    title: "Tabla Fusion Performance (Sajan Bin)",
    description: "An innovative fusion performance showcasing the versatility of Tabla.",
    url: "https://www.youtube.com/embed/1Qvl8hJyJwI"
  },
  {
    id: "3",
    title: "Tabla Fusion Performance (Love by Kendrick Lamar)",
    description: "A creative blend of traditional Tabla rhythms with modern musical elements.",
    url: "https://www.youtube.com/embed/wbTZ3P1mymg"
  },
  {
    id: "4",
    title: "Tabla Fusion Performance (Dont Start Now by Dua Lipa)",
    description: "A fusion of Tabla and English music, creating a unique blend.",
    url: "https://www.youtube.com/embed/uWfI_yykFuU"
  },
  {
    id: "5",
    title: "Tabla Fusion Performance (Psycho by Post Malone)",
    description: "A mixture of Indian and Western music",
    url: "https://www.youtube.com/embed/aEB8i1pd7Vc?start=73"
  },
  {
    id: "6",
    title: "Tabla Fusion Performance (Ek Zindagi by Angrezi Medium)",
    description: "A fusion of Tabla and modern Bollywood music",
    url: "https://www.youtube.com/embed/At27E4Cr2To"
  }
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
