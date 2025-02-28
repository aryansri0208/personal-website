import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  Grocio: { title: "Grocio", description: "Detailed description of project 1" },
  Investment_Advisor: { title: "Project 2", description: "Detailed description of project 2" },
  ECE_Soft: { title: "Project 3", description: "Detailed description of project 3" }
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
