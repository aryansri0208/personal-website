import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <BrowserRouter basename="/personal-website">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Projects Page */}
        <Route path="/projects" element={<Projects />} />

        {/* Dynamic Project Details Page */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
