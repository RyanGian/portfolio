import React from "react";
import './Skills.css';
import logo from "../assets/waves1.png";
import SkillBox from "../components/SkillBox";
import javaLogo from "../assets/skillsIcons/java-icon.png"
import cLogo from "../assets/skillsIcons/c-icon.png"
import htmlLogo from "../assets/skillsIcons/html-icon.png"
import reactLogo from "../assets/skillsIcons/react-icon.png"
import javascriptLogo from "../assets/skillsIcons/javascript-icon.png"
import cssLogo from "../assets/skillsIcons/css-icon.png"
import pythonLogo from "../assets/skillsIcons/python-icon.png"
import nodejsLogo from "../assets/skillsIcons/node-js-icon.png"
import bootstrapLogo from "../assets/skillsIcons/bootstrap-icon.png"

function Skills() {
  return (
    <div className='skills-container'>
        <div className="skills-text">
            SKILLS
        </div>
        <div className="skills-display-container">
          <div className="skills-display-text">Languages, Frameworks and libraries I've used</div>
        </div>

        <div className="skills-display-flexbox">
          <SkillBox skillImage={javaLogo} skillText={'Java'}/>
          <SkillBox skillImage={pythonLogo} skillText={'Python'}/>
          <SkillBox skillImage={cLogo} skillText={'C'}/>
          <SkillBox skillImage={javascriptLogo} skillText={'Javascript'}/>
          <SkillBox skillImage={reactLogo} skillText={'React'}/>
          <SkillBox skillImage={htmlLogo} skillText={'HTML'}/>
          <SkillBox skillImage={cssLogo} skillText={'CSS'}/>
          <SkillBox skillImage={nodejsLogo} skillText={'Nodejs'}/>
          <SkillBox skillImage={bootstrapLogo} skillText={'Bootstrap'}/>
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