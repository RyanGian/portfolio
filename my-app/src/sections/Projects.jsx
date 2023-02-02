import React from "react";
import './Projects.css';
import logo from "../assets/svg (3).png";

function Projects() {
  return (
    <div className='projects-container'>
        <div className="projects-text">
            PROJECTS
        </div>
        <div className="projects-sample-container-1">
          <div className="project-sample-image-1">
            GREY

          </div>
          <div className="projects-sample-image-text">
            <div className="projects-sample-image-text-title">Created Chrome Extension</div>
            <div className="projects-sample-image-text-subtext">Chrome Developer tool</div>
          </div>
        </div>
        <img
            className="image"
            src={ logo }
            alt="logos"
          ></img>
    </div>
  );
}

export default Projects;