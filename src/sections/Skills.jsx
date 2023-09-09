import React from "react";
import styled from "styled-components";
import SkillBox from "../components/SkillBox";

import javaLogo from "../assets/skillsIcons/java-icon.svg";
import cLogo from "../assets/skillsIcons/c-icon.svg";
import htmlLogo from "../assets/skillsIcons/html-icon.svg";
import reactLogo from "../assets/skillsIcons/react-icon.svg";
import javascriptLogo from "../assets/skillsIcons/javascript-icon.svg";
import cssLogo from "../assets/skillsIcons/css-icon.svg";
import cplusplusLogo from "../assets/skillsIcons/cplusplus-icon.svg";
import pythonLogo from "../assets/skillsIcons/python-icon.svg";
// import bootstrapLogo from "../assets/skillsIcons/bootstrap-icon.svg";
// import nodejsLogo from "../assets/skillsIcons/nodejs-icon.svg";
// import flaskLogo from "../assets/skillsIcons/flask-icon.svg";
// import materialuiLogo from "../assets/skillsIcons/materialui-icon.svg";
// import arduinoLogo from "../assets/skillsIcons/arduino-icon.svg";
// import rLogo from "../assets/skillsIcons/r-icon.svg";
import bashLogo from "../assets/skillsIcons/bash-icon.svg";

import SectionHeader from "../components/SectionHeader";

const SkillsContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

  background-color: #101010;
  // background-color: #343434;
  // height: 90vh;
  color: white;
  // user-select: none;
  /* margin-bottom: 100px; */
  padding-bottom: 80px;
  }
`;

const SkillsText = styled.div`
  position: relative;
  z-index: 6;
  margin-top: 100px;
  font-size: 1.5em;
  margin-bottom: 60px;
  @media (max-width: 850px) {
    margin-top: 80px;
    }
  }

  @media (max-width: 750px) {
    margin-top: 50px;
    font-size: 1.2em;
    }
  }

  @media (max-width: 600px) {
    margin-top: 30px;
    font-size: 1em;
    }
  }
`;

const SkillsDisplayFlexbox = styled.div`
  //border: 1px solid blue;
  position: relative;
  // display: flex;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin: auto;
  gap: 3em;

  /* height: 200px; */
  width: 600px;
  z-index: 3;
  @media (max-width: 850px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    width: 550px;
    gap: 3em;
    }
   }

   @media (max-width: 800px) {
     grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
     width: 400px;
     gap: 2.7em;
     }
   }

   @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
    width: 300px;
    gap: 1.2em;
    }
  }

  }
`;

function Skills() {
  return (
    <SkillsContainer name="Skills">
      <SectionHeader text={"SKILLS"} />
      <SkillsText>Languages, and Tech I've used</SkillsText>

      <SkillsDisplayFlexbox>
        <SkillBox icon={javaLogo} skillText={"Java"} />
        <SkillBox icon={pythonLogo} skillText={"Python"} />
        <SkillBox icon={cLogo} skillText={"C"} />
        <SkillBox icon={cplusplusLogo} skillText={"C++"} />
        <SkillBox icon={javascriptLogo} skillText={"Javascript"} />
        <SkillBox icon={htmlLogo} skillText={"HTML"} />
        <SkillBox icon={cssLogo} skillText={"CSS"} />
        <SkillBox icon={reactLogo} skillText={"React"} />
        {/* <SkillBox icon={bootstrapLogo} skillText={"Bootstrap"} />
         <SkillBox icon={nodejsLogo} skillText={"Node.js"} />
        <SkillBox icon={materialuiLogo} skillText={"Material Ui"} />
        <SkillBox icon={flaskLogo} skillText={"Flask"} />
        <SkillBox icon={arduinoLogo} skillText={"Arduino"} />
        <SkillBox icon={rLogo} skillText={"R"} /> */}
        <SkillBox icon={bashLogo} skillText={"Shell Script"} />
        {/* <SkillBox icon={} skillText={"Vue"} />
        <SkillBox icon={} skillText={"type script"} />
        <SkillBox icon={} skillText={"sass"} /> */}
      </SkillsDisplayFlexbox>
    </SkillsContainer>
  );
}

export default Skills;
