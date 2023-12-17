import "./Header.css";
// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import logo from "./assets/logo.png";

function Header() {
  let Scroll = require("react-scroll");
  let scroller = Scroll.scroller;

  function handleScroll(name) {
    scroller.scrollTo(name, {
      duration: 100,
      smooth: true,
      offset: 0,
    });
  }

  return (
    <div className="header-container">
      <div
        className="nav-box-border"
        onClick={() => {
          handleScroll("Experience");
        }}
      >
        <div className="nav-box">EXPERIENCE</div>
      </div>

      <div
        className="nav-box-border"
        onClick={() => {
          handleScroll("Projects");
        }}
      >
        <div className="nav-box">PROJECTS</div>
      </div>

      <div className="nav-box-border">
        <div
          className="nav-box"
          onClick={() => {
            handleScroll("Skills");
          }}
        >
          SKILLS
        </div>
      </div>

      <div
        className="nav-box-border"
        onClick={() => {
          handleScroll("Contact");
        }}
      >
        <div className="nav-box">CONTACT</div>
      </div>
    </div>
  );
}

export default Header;
