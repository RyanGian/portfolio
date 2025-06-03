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
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

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

const ExperienceRight = (props) => {
  return (
    <TimelineItem position="right">
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        style={{ fontSize: "1.4rem" }}
      >
        <ScrollAnimation
          animateIn="animate__animated animate__fadeInLeft"
          delay={1000}
        >
          <div className="animation-parent">
            {/* <div className="animate__animated animate__fadeInRight animate__delay-1s"> */}
            {props.date}
            {/* </div> */}
          </div>
        </ScrollAnimation>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          sx={{
            width: "60px",
            height: "60px",
            padding: 0,
            backgroundColor: "transparent",
          }}
          color="grey"
        >
          <img
            src={props.logo}
            alt="company-logo"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
          ></img>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "80px", px: 2 }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" component="span">
            <ScrollAnimation animateIn="animate__animated animate__fadeInLeft">
              <div className="animation-parent">
                {/* <div className="animate__animated animate__fadeInLeft"> */}
                {props.title}
                {/* </div> */}
              </div>
            </ScrollAnimation>
          </Typography>
        </ThemeProvider>

        <ThemeProvider theme={theme}>
          <Typography className="company-title" variant="h6">
            <ScrollAnimation animateIn="animate__animated animate__fadeInLeft">
              <div className="animation-parent">
                {/* <div className="animate__animated animate__fadeInLeft"> */}
                {props.company}
                {/* </div> */}
              </div>
            </ScrollAnimation>
          </Typography>
        </ThemeProvider>

        <Typography>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Morbi tempus iaculis urna id volutpat lacus laoreet non
            curabitur. Ipsum suspendisse ultrices gravida dictum fusce ut
            placerat orci nulla. */}
        </Typography>

        {/* <Typography variant="h6" sx={{ whiteSpace: "pre-line" }}>
          {"\n"}
        </Typography> */}

        <ThemeProvider theme={theme}>
          <Typography variant="h5">
            <ScrollAnimation animateIn="animate__animated animate__fadeInLeft">
              <div className="animation-parent">
                {/* <div className="animate__animated animate__fadeInLeft"> */}
                <b>{props.bold}</b> {props.description}
                {/* </div> */}
              </div>
            </ScrollAnimation>
          </Typography>
        </ThemeProvider>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceRight;

ExperienceRight.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.any,
  date: PropTypes.string,
  bold: PropTypes.string,
};
