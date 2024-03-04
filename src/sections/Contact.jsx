import React from "react";
import "./Contact.css";
import SectionHeader from "../components/SectionHeader";
import styled from "styled-components";
import { SiMinutemailer } from "react-icons/si";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const ContactText = styled.div`
  margin: auto;
  margin-top: 120px;
  font-size: 1.5em;
  width: 500px;

  @media (max-width: 850px) {
    margin-top: 80px;
    font-size: 1.3em;
    width: 500px;
  }

  @media (max-width: 750px) {
    margin-top: 80px;
    font-size: 1.2em;
    width: 450px;
  }

  @media (max-width: 600px) {
    margin-top: 80px;
    font-size: 1.1em;
    width: 350px;
  }
  }
`;

const style = { color: "rgb(255, 215, 137)" };

function Contact() {
  return (
    <div className="contact-container" name="Contact">
      {/* <div className="animation-parent"> */}
      <SectionHeader text={"CONTACT"} />
      <ScrollAnimation
        animateOnce={false}
        animateIn="animate__fadeInUp"
        delay={230}
      >
        <ContactText>
          <div>What now? Get in touch! </div>
          <div>
            If you have any opportunities, questions or just want to say hello,
            my inbox is always open!
            <div className="email-container">
              <span>
                <SiMinutemailer className="mail-icon" style={style} />
              </span>
              <div style={style}>ryan1gian@gmail.com</div>
            </div>
          </div>
        </ContactText>
        <div className="email-redirect">
          <a
            href="mailto:ryan1gian@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="email-button-text">Email Me!</span>
          </a>
        </div>
      </ScrollAnimation>
      {/* </div> */}
    </div>
  );
}

export default Contact;
