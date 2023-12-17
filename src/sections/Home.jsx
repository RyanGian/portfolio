import React from "react";
import "./Home.css";
import { BsArrowDown } from "react-icons/bs";

function Home() {
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
    <div className="home-container">
      <div className="text-container">
        <div className="colour-border">
          <div className="name-container">RYAN GIAN</div>
        </div>

        {/* <div className="profile-container">
          Hi! I am currently a Computer Science student at UNSW.
        </div> */}
      </div>

      <div
        className="below-the-fold-scroll-container "
        onClick={() => {
          handleScroll("Projects");
        }}
      >
        <div className="scroll-pill">
          <BsArrowDown className="scroll-arrow" size={25} />
        </div>
      </div>
    </div>
  );
}

export default Home;
