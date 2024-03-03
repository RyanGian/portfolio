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
              "React.js, Typescript, Python, Haskell, Postgresql, AWS, Docker"
            }
            logo={daiseeLogo}
            date={"Nov 2023 - Current"}
            bold={"Tech Stack:"}
          ></ExperienceLeft>

          <ExperienceRight
            title={"Bachelor of Computer Science"}
            company={"UNSW"}
            description={
              "Programming fundamentals, Software Engineering Fundamentals, Software Construction, Object-Orientated Design & Programming, Data Structures and Algorithms, Web Front-End Programming, Advanced C++ Programming"
            }
            logo={unswLogo}
            date={"2021 - Current"}
            bold={"Relevant Courses:"}
          ></ExperienceRight>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
