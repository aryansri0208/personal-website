// components/Nav.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import social media icons from react-icons
import "./Nav.css"; // Assuming you have a Nav.css file for custom styles

const Nav = () => {
  return (
    <nav className="top-nav">
      {/* Site Title */}
      <h1 className="site-title">Aryan Srivastava</h1>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/Music" className="nav-link">Music</Link>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/aryan-srivastava-9b1664185/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/aryansri0208" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={24} />
        </a>
        <a href="mailto:aryansri0208@gmail.com" className="social-icon">
          <FaEnvelope size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
