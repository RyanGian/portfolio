import PropTypes from "prop-types";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";

const Container = styled.div`
  //  border: 1px solid white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 180px;

  // &:hover {
  //   transform: scale(1.1);
  // }

  a {
    color: white;
    text-decoration: none; /* no underline */
  }

  }
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
  text-align: ${(props) => (props.right ? "right" : "left")};
  padding: 16px
  }
`;

const Languages = styled.div`
//  border: 1px solid green;
  opacity: 70%;
  margin-top: 15px;
  border-radius: 5px;
  width: 75%;
  height: 80px;
  margin-left: ${(props) => (props.right ? "140px" : "0px")};
  text-align: ${(props) => (props.right ? "right" : "left")};
  }
`;




const ImageContainer = styled.div`
  border: 1px solid #555454;
  border-radius: 5px;
  width: 450px;
  height: 260px;
  margin-right: ${(props) => (props.right ? "250px" : "-310px")};
  overflow: hidden;
  color: #a9a9a9;
  // @media (max-width: 900px) {
  //   width: ${(props) => (props.width/2)+"px"};
  //   height: ${(props) => ( props.height/2)+"px" - "260px" };
  // }
}
`;

const SampleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  opacity: 0.6;
}
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
    <Container>
      {windowWidth >= 1000 ?
      <>
      <ImageContainer width={windowWidth} height = {windowHeight} right={props.alternate} left={props.alternate}>
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
          {props.redirect && (
            <>
              <a
                href={props.gitHubLink}
                className="open-button"
                rel="noreferrer"
                target="_blank"
              >
                <RiGithubFill className="github-logo" />
              </a>

              <a
                href={props.siteLink}
                className="open-button"
                rel="noreferrer"
                target="_blank"
              >
                <RiExternalLinkLine className="link-logo" />
              </a>
            </>
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
      :
      <>s</>
      }


    </Container>
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
