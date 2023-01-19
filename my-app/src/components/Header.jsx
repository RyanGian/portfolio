import './Header.css';
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

  //   const navigationStyle = {
  //     margin: "30px",
  //   };
  return (
    <div>
      <nav className="header-container">
        <span className='nav-box'>
          About
        </span>
        <span className='nav-box'>
          Projects
        </span>
        <span className='nav-box'>
          Skills
        </span>
        <span className='nav-box'>
          About
        </span>

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
      </nav>
    </div>
  );
}

export default Header;
