import "./ExperienceLeft.css";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";

const theme = createTheme();
theme.typography.h5 = {
  fontSize: "18px",
  fontWeight: 400,
  "@media (max-width:600px)": {
    fontWeight: 300,
    fontSize: "0.8rem",
  },
};

theme.typography.h4 = {
  fontSize: "35px",
  // typography: {
  //   fontFamily: "Poligon",
  // },
  "@media (max-width:600px)": {
    // fontWeight: 300,
    fontSize: "23px",
  },
};

theme.typography.h6 = {
  fontSize: "28px",
  fontWeight: 300,
  // typography: {
  //   fontFamily: "Poligon",
  // },
  "@media (max-width:600px)": {
    fontWeight: 300,
    fontSize: "20px",
  },
};

const ExperienceLeft = (props) => {
  return (
    <TimelineItem position="left">
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        style={{ fontSize: "1.4rem" }}
      >
        <div class="animation-parent">
          <div class="animate__animated animate__fadeInLeft animate__delay-1s">
            {props.date}
          </div>
        </div>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          sx={{ width: "60px", height: "60px", padding: 0 }}
          color="grey"
        >
          <img
            src={props.logo}
            alt="daisee-logo"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          ></img>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "20px", px: 2 }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" component="span">
            <div class="animation-parent">
              <div class="animate__animated animate__fadeInRight animate__delay-0.5s">
                {props.title}
              </div>
            </div>
          </Typography>
        </ThemeProvider>

        <ThemeProvider theme={theme}>
          <Typography className="company-title" variant="h6">
            <div class="animation-parent">
              <div class="animate__animated animate__fadeInRight animate__delay-0.5s">
                {props.company}
              </div>
            </div>
          </Typography>
        </ThemeProvider>

        <Typography>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Morbi tempus iaculis urna id volutpat lacus laoreet non
            curabitur. Ipsum suspendisse ultrices gravida dictum fusce ut
            placerat orci nulla. */}
        </Typography>
        <Typography variant="h6" sx={{ whiteSpace: "pre-line" }}>
          {"\n"}
        </Typography>
        <ThemeProvider theme={theme}>
          <Typography variant="h5">
            <div class="animation-parent">
              <div class="animate__animated animate__fadeInRight animate__delay-0.5s">
                <b>{props.bold}</b> {props.description}
              </div>
            </div>
          </Typography>
        </ThemeProvider>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceLeft;

ExperienceLeft.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.any,
  date: PropTypes.string,
  bold: PropTypes.string,
};
