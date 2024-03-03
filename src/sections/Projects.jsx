import React from "react";
import "./Projects.css";

import ProjectSampleCard from "../components/ProjectSampleCard";
import sample1 from "../assets/projects-personal/personal-site.PNG";
import sample2 from "../assets/projects-personal/personal-visualiser.png";

import uni1 from "../assets/projects-uni/back-in-blackout.png";
import uni2 from "../assets/projects-uni/dungeon-mania.PNG";
import uni3 from "../assets/projects-uni/airbrb.png";
import uni4 from "../assets/projects-uni/seams.png";
import uni5 from "../assets/projects-uni/slackr.PNG";
import uni6 from "../assets/projects-uni/git.png";
import uni7 from "../assets/projects-uni/transpiler.PNG";
import uni8 from "../assets/projects-uni/tutormanager.PNG";

import ProjectToggle from "../components/ProjectToggle";
import SectionHeader from "../components/SectionHeader";

function Projects() {
  const [projectTab, setProjectTab] = React.useState("personal");
  // Personal or Uni
  return (
    <div className="projects-container" name="Projects">
      <SectionHeader text={"PROJECTS"} />

      <ProjectToggle projectTab={projectTab} setProjectTab={setProjectTab} />
      {projectTab === "personal" ? (
        <>
          <ProjectSampleCard
            image={sample1}
            title={"Personal Portfolio Website"}
            description={
              "This site! A personal portfolio page I have created to showcase my own projects, own skills, and contact information. Most of the components used were written from scratch!"
            }
            application={"Front End"}
            language={"HTML \xa0 CSS \xa0 Javascript \xa0 React"}
            alternate={false}
            redirectGithublink={false}
            // gitHubLink={"https://github.com/RyanGian/Ryan-Portfolio"}
            redirectLink={false}
          />
          <ProjectSampleCard
            image={sample2}
            title={"Visualise Your Chrome Extension Analytics"}
            description={
              "A Chrome Developer tool built as a Chrome Extension that visualises developer analytics into more easier, readable graphs. The tool breaks down CSV files containing installations and country statistics."
            }
            application={"Chrome Extension"}
            language={"HTML \xa0 CSS \xa0 Javascript \xa0 Bootstrap"}
            alternate={true}
            redirectGithublink={true}
            gitHubLink={
              "https://github.com/Imogi/Chrome-extension-total-installs"
            }
            redirectLink={true}
            siteLink={
              "https://chrome.google.com/webstore/detail/visualise-chrome-extensio/pkcchhcoebopcidgmiefbglbohfdcamo"
            }
          />
        </>
      ) : (
        <>
          <ProjectSampleCard
            image={uni8}
            title={"Tutor Manager"}
            description={
              "Worked in a group of 5 to create a fully functional tutor manager website. Students would be able to find tutors and make bookings. Tutors would be able to manage students on a simplified dashboard. Database was hosted on AWS. Utilised Flask as a web application framework to connect the backend ports to the frontend. Jira board utilised during 3 sprints."
            }
            application={"Fullstack"}
            language={
              "React \xa0 Python \xa0 PostgreSQL (Psycopg2) \xa0 Flask \xa0 CSS \xa0 HTML \xa0 Material-UI"
            }
            alternate={false}
          />
          <ProjectSampleCard
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
          <ProjectSampleCard
            image={uni5}
            title={"Slackr"}
            description={
              "Built a messaging/communications site similar to the popular messaging tool slack. Frontend interacted with a RESTful API HTTP backend (given backend built as a NodeJS express server). Used HTTP requests using fetch API and promises to dynamically manipulate the DOM without requiring full page reload. Using these processes, SPAs (single-page applications) are generated, rendered, and updated using JavaScript. "
            }
            application={"Frontend"}
            language={"HTML \xa0 CSS \xa0 Javascript "}
            alternate={false}
          />

          <ProjectSampleCard
            image={uni4}
            title={"Seams"}
            description={
              "Collaborated in a group of 5 to create a mock Microsoft Teams app. Gained experience in the AGILE development lifecycle, testing, and maintaining backend server in Python. Grew an appreciation for product design and understood customer requirement via user stories. Implemented and tested HTTP Flask server to entire interface. Learnt to keep data persistence throughout app and used JWTs (JSON Web Tokens) to encrypt user data."
            }
            application={"Backend"}
            language={"Python \xa0 Flask"}
            alternate={true}
          />
          <ProjectSampleCard
            image={uni7}
            title={"Sheepy"}
            description={
              "A python program that was a Shell Script to Python transpiler. The program would automate this process, translating POSIX Shell code to Python. It would take Shell scripts as input and output Python code."
            }
            application={"Backend"}
            language={"Python \xa0 Regex"}
            alternate={false}
          />
          <ProjectSampleCard
            image={uni6}
            title={"Pigs"}
            description={
              'Implemented Pigs, which was a simplified version control system of Git. Pigs stood for "POSIX Implementation of Git" in Shell. Had to replicate many git commands where these commands had to be implemented in POSIX-compatible Shell. Strengthened skills in regex, and file manipulation. This task reproduced the function of the staging area between the workspace and the repository (aka the Git Index).'
            }
            application={"Backend"}
            language={"Shell \xa0 Regex"}
            alternate={true}
          />
          <ProjectSampleCard
            image={uni2}
            title={"Dungeon Mania"}
            description={
              "Worked in a team of 4 to create the backend for a dungeon game. Applied various software design principles and design patterns as software solutions. Adapted to changes in specification requirement. Utilised Agile principles to our project management and software development. Built a persistent web application in the program (continued persistence through different saves of the game)."
            }
            application={"Backend"}
            language={"Java"}
            alternate={false}
          />

          <ProjectSampleCard
            image={uni1}
            title={"Back in Blackout"}
            description={
              "Built a Java program using Object-Oriented design processes. Gained experience in creating a Java program that incorporated multiple interacting classes. Developed critical solving skills and experience with Java Libraries. Began to familarise with UML diagrams."
            }
            application={"Backend"}
            language={"Java"}
            alternate={true}
          />
        </>
      )}
    </div>
  );
}

export default Projects;
