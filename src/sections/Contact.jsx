import React from "react";
import "./Contact.css";
import SectionHeader from "../components/SectionHeader";
import styled from "styled-components";
import { SiMinutemailer } from "react-icons/si";

const ContactText = styled.div`
  margin: auto;
  margin-top: 80px;
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

function Contact() {
  return (
    <div className="contact-container" name="Contact">
      <SectionHeader text={"CONTACT"} />
      <ContactText>
        <div>What now? Get in touch! </div>
        <div>
          If you have any opportunities, questions or just want to say hello, my
          inbox is always open!
          <div className="email-container">
            <span ><SiMinutemailer className="mail-icon"/></span>
            <span>ryan1gian@gmail.com</span>
          </div>

        </div>
      </ContactText>
      <div className="email-redirect">
        <a
          href="mailto:ryan1gian@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Email Me!
        </a>
      </div>
    </div>
  );
}

export default Contact;
