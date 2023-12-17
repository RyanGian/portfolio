import React from "react";
import "./Experience.css";
import SectionHeader from "../components/SectionHeader";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";

import daiseeLogo from "../assets/experience-logos/daisee-logo.png";
import unswLogo from "../assets/experience-logos/unsw-logo.png";

function Experience() {
  return (
    <div className="experience-container" name="Experience">
      <SectionHeader text={"EXPERIENCE"} />
      <div className="x">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              style={{ fontSize: "1.5rem" }}
            >
              Nov 2023 -
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                sx={{ width: "60px", height: "60px", padding: 0 }}
                color="grey"
              >
                <img
                  src={daiseeLogo}
                  alt="daisee-logo"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                ></img>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "20px", px: 2 }}>
              <Typography variant="h4" component="span">
                Software Engineer Intern
              </Typography>
              <Typography variant="h5">daisee</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tempus iaculis urna id volutpat lacus laoreet non
                curabitur. Ipsum suspendisse ultrices gravida dictum fusce ut
                placerat orci nulla.
              </Typography>
              <Typography variant="h6" sx={{ whiteSpace: "pre-line" }}>
                {"\n"}
              </Typography>
              <Typography>
                Tech Stack: Typescript, Next.js, Python, Haskell, AWS, Docker,
                Postgresql
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              style={{ fontSize: "1.5rem" }}
            >
              2021 -
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                sx={{ width: "60px", height: "60px", padding: 0 }}
                color="grey"
              >
                <img
                  src={unswLogo}
                  alt="unsw-logo"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                ></img>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px", px: 2 }}>
              <Typography variant="h4" component="span">
                UNSW
              </Typography>

              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tempus iaculis urna id volutpat lacus laoreet non
                curabitur. Ipsum suspendisse ultrices gravida dictum fusce ut
                placerat orci nulla.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
