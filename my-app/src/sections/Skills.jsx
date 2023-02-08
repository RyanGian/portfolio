import React from "react";
import "./Skills.css";
import logo from "../assets/waves1.png";
import SkillBox from "../components/SkillBox";

import javaLogo from "../assets/skillsIcons/java-icon.svg";
import cLogo from "../assets/skillsIcons/c-icon.svg";
import htmlLogo from "../assets/skillsIcons/html-icon.svg";
import reactLogo from "../assets/skillsIcons/react-icon.svg";
import javascriptLogo from "../assets/skillsIcons/javascript-icon.svg";
import cssLogo from "../assets/skillsIcons/css-icon.svg";
import pythonLogo from "../assets/skillsIcons/python-icon.svg";
import nodejsLogo from "../assets/skillsIcons/nodejs-icon.svg";
import bootstrapLogo from "../assets/skillsIcons/bootstrap-icon.svg";
import flaskLogo from "../assets/skillsIcons/flask-icon.svg";
import materialuiLogo from "../assets/skillsIcons/materialui-icon.svg";
import SectionHeader from "../components/SectionHeader";

function Skills() {
  return (
    <div className="skills-container">
      <SectionHeader text={"SKILLS"} />
      <div className="skills-display-container">
        <div className="skills-display-text">
          Languages, Frameworks and libraries I've used
        </div>
      </div>

      <div className="skills-display-flexbox">
        <SkillBox icon={javaLogo} skillText={"Java"} />
        <SkillBox icon={javascriptLogo} skillText={"Javascript"} />
        <SkillBox icon={pythonLogo} skillText={"Python"} />
        <SkillBox icon={cLogo} skillText={"C"} />
        <SkillBox icon={reactLogo} skillText={"React"} />
        <SkillBox icon={htmlLogo} skillText={"HTML"} />
        <SkillBox icon={cssLogo} skillText={"CSS"} />
        <SkillBox icon={nodejsLogo} skillText={"Node.js"} />
        <SkillBox icon={bootstrapLogo} skillText={"Bootstrap"} />
        <SkillBox icon={materialuiLogo} skillText={"Material Ui"} />
        <SkillBox icon={flaskLogo} skillText={"Flask"} />
      </div>

      {/* <img
            className="image"
            src={ logo }
            alt="logos"
          ></img> */}
    </div>
  );
}

export default Skills;
