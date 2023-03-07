import React from "react";
import "./Contact.css";
import SectionHeader from "../components/SectionHeader";
import styled from "styled-components";

const ContactText = styled.div`
  margin: auto;
  margin-top: 100px;
  font-size: 1.5em;
  width: 500px;
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
        </div>
      </ContactText>
      <div className="email-redirect">
        <a
          href="mailto:ryan3gian@gmail.com"
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
