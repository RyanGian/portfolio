import React from "react";
import styled from "styled-components";
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

const SkillsContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

  background-color: #101010;
  // background-color: #343434;
  /* height: 100vh; */
  color: white;
  user-select: none;
  /* margin-bottom: 100px; */
  padding-bottom: 100px;
  }
`;

const SkillsText = styled.div`
  margin-top: 100px;
  font-size: 1.5em;
  }
`;

const SkillsDisplayFlexbox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  column-gap: 25px;
  /* height: 200px; */
  width: 600px;
  z-index: 3;
  }
`;

function Skills() {
  return (
    <SkillsContainer name="Skills">
      <SectionHeader text={"SKILLS"} />
      <SkillsText>Languages, Frameworks and libraries I've used</SkillsText>

      <SkillsDisplayFlexbox>
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
      </SkillsDisplayFlexbox>
    </SkillsContainer>
  );
}

export default Skills;
