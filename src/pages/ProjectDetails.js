import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  project1: { title: "Project 1", description: "Detailed description of project 1" },
  project2: { title: "Project 2", description: "Detailed description of project 2" },
  project3: { title: "Project 3", description: "Detailed description of project 3" }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  return project ? (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  ) : (
    <h2>Project Not Found</h2>
  );
};

export default ProjectDetails;
