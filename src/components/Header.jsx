import "./Header.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

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

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
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

      <div className="app-bar-container">
        {/* <FormControlLabel
          className="x"
          control={<Switch checked={checked} onChange={handleChange} />}
          label={<MenuIcon />}
        /> */}
        <div className="menu-button-container">
          {checked == false ? (
            <MenuIcon onClick={() => handleChange()} />
          ) : (
            <MenuOpenIcon onClick={() => handleChange()} />
          )}
        </div>

        <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
          <div className="app-bar-tabs">
            <div
              onClick={() => {
                setTimeout(() => {
                  handleChange();
                }, 500);
                handleScroll("Experience");
              }}
            >
              EXPERIENCEE
            </div>
            <div
              onClick={() => {
                setTimeout(() => {
                  handleChange();
                }, 500);

                handleScroll("Projects");
              }}
            >
              PROJECTS
            </div>
            <div
              onClick={() => {
                setTimeout(() => {
                  handleChange();
                }, 500);

                handleScroll("Skills");
              }}
            >
              SKILLS
            </div>
            <div
              onClick={() => {
                setTimeout(() => {
                  handleChange();
                }, 500);

                handleScroll("Contact");
              }}
            >
              CONTACT
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Header;
