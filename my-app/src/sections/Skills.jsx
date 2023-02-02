import React from "react";
import './Skills.css';
import logo from "../assets/waves1.png";

function Skills() {
  return (
    <div className='skills-container'>
        <div className="skills-text">
            SKILLS
        </div>
        <img
            className="image"
            src={ logo }
            alt="logos"
          ></img>
    </div>
  );
}

export default Skills;