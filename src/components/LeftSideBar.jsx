import "./LeftSideBar.css";
// import PropTypes from 'prop-types';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function LeftSideBar() {
  return (
    <div className="left-side-bar-container">
      <div className="icon-container">
        <div className="line"></div>

        <a
          href="mailto:ryan3gian@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="icon">
            <MdEmail />
          </div>
        </a>

        <div className="icon">
          <BsLinkedin />
        </div>

        <a
          href={"https://github.com/RyanGian"}
          className="open-button"
          rel="noreferrer"
          target="_blank"
        >
          <div className="icon">
            <BsGithub />
          </div>
        </a>

        {/* <div className="page-pill">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div> */}
      </div>
    </div>
  );
}

export default LeftSideBar;

// LeftSideBar.propTypes = {
//   skillImage: PropTypes.any,
// };
