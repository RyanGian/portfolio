import "./Header.css";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "./assets/logo.png";

function Header() {
  const [width, setWindowWidth] = useState(0);
  React.useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

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

      {/* {width >= 800 ? (
            <span style={navigationStyle}>
              <Link to="/">Home</Link>|<Link to="/blanko">Blanko</Link>|
              <Link to="/slido">Slido</Link>|<Link to="/tetro">Tetro</Link>
            </span>

        ) : (
            <span style={navigationStyle}>
              <Link to="/">H</Link>|<Link to="/blanko">B</Link>|
              <Link to="/slido">S</Link>|<Link to="/tetro">T</Link>
            </span>
        )} */}
    </div>
  );
}

export default Header;
