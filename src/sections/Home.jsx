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

        <div className="profile-container">
          <div>Software Engineer based in Sydney, Australia.</div>
          &nbsp;
          <div>
            Graduated with a Bachelor's of Computer Science at the University of
            New South Wales (UNSW).
          </div>
          {/* &nbsp; */}
          {/* <div>
            Interned at a B2B company with a focus on frontend development.
          </div> */}
        </div>
      </div>

      <div
        className="below-the-fold-scroll-container"
        onClick={() => {
          handleScroll("Experience");
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
