import React from "react";
import "./Projects.css";

import ProjectSample from "../components/ProjectSample";
import sample1 from "../assets/projects-personal/personal-site.PNG";
import sample2 from "../assets/projects-personal/personal-visualiser.png";

import a from "../assets/sat1.png";
import b from "../assets/maze1.png";
import c from "../assets/s3.PNG";
import ProjectToggle from "../components/ProjectToggle";
import SectionHeader from "../components/SectionHeader";

function Projects() {
  const [projectTab, setProjectTab] = React.useState("personal");
  // Personal or Uni
  return (
    <div className="projects-container">
      <SectionHeader text={"PROJECTS"} />

      <ProjectToggle setProjectTab={setProjectTab} />
      {projectTab === "personal" ? (
        <>
          <ProjectSample
            image={sample1}
            title={"Personal Portfolio Website"}
            description={
              "This site! A personal portfolio page I have created to showcase my own projects, own skills, and contact information. "
            }
            application={"Front End"}
            language={
              "HTML \xa0 CSS \xa0 Javascript \xa0 React \xa0 Styled Components"
            }
            alternate={false}
            redirect={true}
          />
          <ProjectSample
            image={sample2}
            title={"Visualise Your Chrome Extension Analytics"}
            description={
              "A Chrome Developer tool built as a Chrome Extension that visualises developer analytics into more easier, readable graphs. The tool breaks down CSV files containing installations and country statistics."
            }
            application={"Chrome Extension"}
            language={"HTML \xa0 CSS \xa0 Javascript"}
            alternate={true}
            redirect={true}
          />
        </>
      ) : (
        <>
          <ProjectSample
            image={a}
            title={"Back in Blackout"}
            description={"This site!"}
            application={"Backend"}
            language={"Java"}
            alternate={true}
          />
          <ProjectSample
            image={b}
            title={"Dungeon Mania"}
            description={"This site!"}
            application={"Backend"}
            language={"Java"}
            alternate={false}
          />
          <ProjectSample
            image={c}
            title={"AirBrB"}
            description={"This site!"}
            application={"Frontend"}
            language={"HTML \xa0 CSS \xa0 Javascript \xa0 React \xa0 Bootstrap"}
            alternate={true}
          />
        </>
      )}

      {/* <img className="image" src={logo} alt="logos"></img> */}
    </div>
  );
}

export default Projects;
