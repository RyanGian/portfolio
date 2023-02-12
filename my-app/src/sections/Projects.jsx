import React from "react";
import "./Projects.css";

import ProjectSample from "../components/ProjectSample";
import sample1 from "../assets/projects-personal/personal-site.PNG";
import sample2 from "../assets/projects-personal/personal-visualiser.png";

import uni1 from "../assets/projects-uni/back-in-blackout.png";
import uni2 from "../assets/projects-uni/dungeon-mania.png";
import uni3 from "../assets/projects-uni/airbrb.PNG";
import uni4 from "../assets/projects-uni/seams.PNG";
import uni5 from "../assets/projects-uni/slackr.PNG";
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
              "This site! A personal portfolio page I have created to showcase my own projects, own skills, and contact information."
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
            language={"HTML \xa0 CSS \xa0 Javascript \xa0 Bootstrap"}
            alternate={true}
            redirect={true}
          />
        </>
      ) : (
        <>
          <ProjectSample
            image={uni1}
            title={"Back in Blackout"}
            description={
              "Built a Java program using Object-Oriented design processes. Gained experience in creating a Java program that incorporated multiple interacting classes. Developed critical solving skills and experience with Java Libraries."
            }
            application={"Backend"}
            language={"Java"}
            alternate={true}
          />
          <ProjectSample
            image={uni2}
            title={"Dungeon Mania"}
            description={
              "Worked in a team of 4 to create the backend for a dungeon game. Applied various software design principles and patterns as software solutions. Adapted to changes in specification requirement. Utilised Agile principles to our project management and software development. Built a persistent web application in the program. Continued persistence through different saves of the game."
            }
            application={"Backend"}
            language={"Java"}
            alternate={false}
          />
          <ProjectSample
            image={uni3}
            title={"AirBrB"}
            description={
              "Worked in a pair to build a frontend site. All pages were built on react. Strengthened my UX and UI design principles. Practiced using Bootstrap and material UI to modernise the aesthetic of the app. Created Component and UI tests (Cypress utilised for UI tests). Gained alot of experience with asynchronous functions"
            }
            application={"Frontend"}
            language={
              "HTML \xa0 CSS \xa0 Javascript \xa0 React \xa0 Bootstrap \xa0 Cypress"
            }
            alternate={true}
          />
          <ProjectSample
            image={uni4}
            title={"Seams"}
            description={
              "Collaborated in a group of 5 to create a mock app of Microsoft Teams. Learnt to work together as a team by  managing, planning and allocating tasks/tickets to each team member. Developed experience in the software development lifecycle, testing, developing and maintaining backend server in Python. Grew an appreciation for product design and understood customer requirement via user stories. Implemented and tested HTTP Flask server according to the entire interface. Learnt to keep data persistence throughout app and used JWTs (JSON Web Tokens) to encrypt user data. "
            }
            application={"Backend"}
            language={"Python \xa0 Flask"}
            alternate={false}
          />
          <ProjectSample
            image={uni5}
            title={"Slackr"}
            description={
              "Built a messaging/communications site (only frontend component) similar to the popular messaging tool slack. Backend was provided. Frontend interacted with a RESTful API HTTP backend (given backend built as a NodeJS express server). Used HTTP requests using fetch API and promises to dynamically manipulate the DOM without requiring full page reload. Using these processes, SPAs (single-page applications) are generated, rendered, and updated using JavaScript. Hence, all changes of application state are essentially modifications to the DOM."
            }
            application={"Frontend"}
            language={"HTML \xa0 CSS \xa0 Vanilla Javascript "}
            alternate={true}
          />
        </>
      )}

      {/* <img className="image" src={logo} alt="logos"></img> */}
    </div>
  );
}

export default Projects;
