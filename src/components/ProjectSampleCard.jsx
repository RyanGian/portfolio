import PropTypes from "prop-types";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";
import "./ProjectSampleCard.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const Container = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  height: 400px;
  // &:hover {
  //   transform: scale(1.1);
  // }

  a {
    color: white;
    text-decoration: none; /* no underline */
  }

  }
  // border: white solid 1px;
`;

// #a9a9a9

const TextContainer = styled.div`
 //border: 1px solid yellow;
  border-radius: 5px;
  width: 480px;
  min-height: 250px;
  position: absolute;
  margin-right: ${(props) => (props.right ? "-310px" : "250px")};

  }
`;

const Title = styled.div`
  //border: 1px solid blue;
  margin-left: ${(props) => (props.right ? "140px" : "0px")};
  text-align: ${(props) => (props.right ? "right" : "left")};
  border-radius: 5px;
  width: 75%;
  min-height: 100px;
  padding-bottom: 5px;

  .github-logo {
    width: 25px;
    height: 25px;
    margin-right: 6px;
    margin-top: 1px;
  }

  .github-logo:hover {
    opacity: 50%;
    cursor: pointer;
  }

  .link-logo {
    width: 26px;
    height: 26px;

    margin-top: 1px;
  }

  .link-logo:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

const DescriptionContainer = styled.div`
  // border: 1px solid white;
  border-radius: 5px;
  font-weight: 300;
  width: 90%;
  min-height: 80px;
  background-color: #555454;
  margin-left: ${(props) => (props.right ? "20px" : "20px")};
  margin-top: 15px;

  }
`;

const DescriptionText = styled.div`
  text-align: justify;
  padding: 16px
  }
`;

const Languages = styled.div`
  opacity: 70%;
  margin-top: 15px;
  border-radius: 5px;
  width: 75%;
  height: 80px;
  margin-left: ${(props) => (props.right ? "140px" : "0px")};
  text-align: ${(props) => (props.right ? "right" : "left")};

  @media (max-width: 1000px) {
    margin-left: 15px;
    margin-top: 10px;
  }

  @media (max-width: 550px) {
    font-size: 0.9em;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 1000px) {
    border: 1px solid #555454;
    border-radius: 5px;
    width: 450px;
    height: 260px;
    margin-right: ${(props) => (props.right ? "250px" : "-310px")};
    color: #a9a9a9;
    // @media (max-width: 900px) {
    //   width: ${(props) => props.width / 2 + "px"};
    //   height: ${(props) => props.height / 2 + "px" - "260px"};
    // }
  }

  @media (max-width: 1000px) {
    border-radius: 5px;
    position: relative;
    //border: 1px solid green;
    width: 60vw;
    overflow:hidden;
    height: 35vw;
  }


  @media (max-width: 800px) {
    border-radius: 5px;
    width: 65vw;
    height: 50vw;
    overflow:hidden;
  }

  @media (max-width: 700px) {
    border-radius: 5px;
    width: 70vw;
    height: 70vw;
    overflow:hidden;

  }

  @media (max-width: 500px) {
    border-radius: 5px;
    width: 70vw;
    height: 90vw;
    overflow:hidden;
  }
}
`;

const SampleImage = styled.img`
  @media (min-width: 1000px) {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0.6;
  }

  @media (max-width: 1000px) {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }

  @media (max-width: 800px) {
    height: 100%;
    border-radius: 5px;

  }

  @media (max-width: 700px) {
    transform: scale(1.3);
  }


  @media (max-width: 600px) {
    border-radius: 5px;
    transform: scaleX(1.4);
  }
}
`;

// Resizes the container of the project cards depending on window size
const ResizeContainer = styled.div`
  border: 1px solid #555454;
  border-radius: 5px;
  width: 60vw;
  height: 35vw;

  @media (max-width: 800px) {
    width: 65vw;
    height: 50vw;
    overflow: hidden;
  }

  @media (max-width: 700px) {
    width: 70vw;
    height: 55vw;
    overflow: hidden;
  }

  // Included 600px only due to sizing issues. 600px media query only here
  @media (max-width: 600px) {
    width: 70vw;
    height: 65vw;
    overflow: hidden;
  }

  @media (max-width: 500px) {
    width: 70vw;
    height: 75vw;
    overflow: hidden;
  }
`;

const ResizeTextContainer = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  //border: 1px solid blue;
  width: 100%;

  @media (max-width: 1000px) {
    width: 60vw;
  }

  @media (max-width: 800px) {
    width: 65vw;
  }

  @media (max-width: 700px) {
    width: 70vw;
  }

  @media (max-width: 500px) {
    width: 70vw;
  }
`;

const ResizeTitle = styled.div`
  padding-top: 10px;

  font-size: 2em;
  float: left;
  width: 90%;
  margin: auto;

  @media (max-width: 1000px) {
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 700px) {
  }

  @media (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const ResizeApplication = styled.div`
  font-size: 1em;
  width: 100%;
  float: right;
  //border: 1px solid white;

  .float-left {
    float: left;
    margin-left: 10px;
  }

  @media (max-width: 1000px) {
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 700px) {
  }

  @media (max-width: 550px) {
    font-size: 0.9em;
  }
`;

const ResizeDescription = styled.div`
  font-weight: 300;
  width: 95%;
  margin-top: 10px;

  // Here for smaller width size
  // text-align: justify;

  .float-left {
    float: left;
    margin-left: 20px;
  }

  @media (max-width: 550px) {
    font-size: 1em;
  }

  @media (max-width: 430px) {
    font-size: 0.75em;
  }
`;

const ResizeLinks = styled.div`
  margin-left: 5px;
  margin-top: 6px;

  .float-left {
    float: left;
    margin-left: 8px;
  }

  .github-logo {
    width: 25px;
    height: 25px;
  }

  .github-logo:hover {
    opacity: 50%;
    cursor: pointer;
  }

  .link-logo {
    width: 26px;
    height: 26px;
  }

  .link-logo:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

const TitleWord = styled.h1`
  color: rgb(255, 215, 137);
`;

const TypeWord = styled.h4`
  color: rgb(255, 215, 137);
`;

const ProjectSampleCard = (props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <div className="animation-parent">
      <ScrollAnimation animateOnce={true} animateIn="animate__bounceIn">
        <Container>
          {windowWidth > 1000 ? (
            <>
              <ImageContainer
                width={windowWidth}
                height={windowHeight}
                right={props.alternate}
                left={props.alternate}
              >
                <SampleImage
                  className="project-sample-image"
                  src={props.image}
                  alt=""
                />
              </ImageContainer>
              <TextContainer right={props.alternate} left={props.alternate}>
                <Title right={props.alternate}>
                  <h1>{props.title}</h1>
                  <h4>{props.application}</h4>
                  {props.redirectGithublink && (
                    <a
                      href={props.gitHubLink}
                      className="open-button"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <RiGithubFill className="github-logo" />
                    </a>
                  )}

                  {props.redirectLink && (
                    <a
                      href={props.siteLink}
                      className="open-button"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <RiExternalLinkLine className="link-logo" />
                    </a>
                  )}
                </Title>
                <DescriptionContainer right={props.alternate}>
                  <DescriptionText right={props.alternate}>
                    {props.description}
                  </DescriptionText>
                </DescriptionContainer>
                <Languages right={props.alternate}>{props.language}</Languages>
              </TextContainer>
            </>
          ) : (
            <ResizeContainer>
              <ResizeTextContainer>
                <ResizeTitle>
                  <b>{props.title}</b>
                </ResizeTitle>
                <ResizeApplication>
                  <b className="float-left">{props.application}</b>
                </ResizeApplication>
                <ResizeLinks>
                  {props.redirectGithublink && (
                    <a
                      href={props.gitHubLink}
                      className="open-button float-left"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <RiGithubFill className="github-logo" />
                    </a>
                  )}

                  {props.redirectLink && (
                    <a
                      href={props.siteLink}
                      className="open-button float-left"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <RiExternalLinkLine className="link-logo" />
                    </a>
                  )}
                </ResizeLinks>

                <ResizeDescription>
                  <div className="float-left">{props.description}</div>
                </ResizeDescription>
                <Languages>{props.language}</Languages>
              </ResizeTextContainer>

              <ImageContainer>
                <SampleImage
                  className="project-sample-image"
                  src={props.image}
                  alt=""
                />
              </ImageContainer>
            </ResizeContainer>
          )}
        </Container>
      </ScrollAnimation>
    </div>
  );
};

export default ProjectSampleCard;

ProjectSampleCard.propTypes = {
  title: PropTypes.string,
  subtext: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any,
  alternate: PropTypes.bool,
  redirect: PropTypes.bool,
  gitHubLink: PropTypes.string,
  siteLink: PropTypes.string,
};
