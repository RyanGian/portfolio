import React from "react";
import "./Experience.css";
import SectionHeader from "../components/SectionHeader";
import Timeline from "@mui/lab/Timeline";

import daiseeLogo from "../assets/experience-logos/daisee-logo.png";
import ExperienceLeft from "../components/ExperienceLeft";
import ExperienceRight from "../components/ExperienceRight";

import unswLogo from "../assets/experience-logos/unsw-logo.png";

function Experience() {
  return (
    <div className="experience-container" name="Experience">
      <SectionHeader text={"EXPERIENCE"} />

      <div className="timeline-container">
        <Timeline>
          <ExperienceLeft
            title={"Software Engineer Intern"}
            company={"daisee"}
            description={
              "Typescript, Python, React.js, Haskell, Postgresql, AWS"
            }
            logo={daiseeLogo}
            date={"Nov 2023 - Dec 2024"}
            bold={"Tech Stack:"}
          ></ExperienceLeft>

          <ExperienceRight
            title={"Bachelor of Computer Science"}
            company={"UNSW"}
            description={
              "Programming fundamentals, Software Engineering Fundamentals, Software Construction, Object-Orientated Design & Programming, Data Structures and Algorithms, Web Front-End Programming, Advanced C++ Programming, Database Systems, Computer Networks and Applications, Software testing and Quality Assurance"
            }
            logo={unswLogo}
            date={"2021 - 2024"}
            bold={"Relevant Courses:"}
          ></ExperienceRight>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
