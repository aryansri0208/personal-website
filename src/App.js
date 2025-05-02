import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Music from "./pages/Music";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <BrowserRouter basename="/personal-website">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Projects Page */}
        <Route path="/projects" element={<Projects />} />

         {/* Music Page */}
         <Route path="/Music" element={<Music />} />

        {/* Dynamic Project Details Page */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
