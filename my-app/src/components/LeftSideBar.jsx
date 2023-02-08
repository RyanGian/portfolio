import "./LeftSideBar.css";
// import PropTypes from 'prop-types';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function LeftSideBar() {
  return (
    <div className="right-side-bar-container">
      <div className="icon-container">
        <div className="line"></div>
        <div className="icon">
          <MdEmail />
        </div>
        <div className="icon">
          <BsLinkedin />
        </div>

        <div className="icon">
          <BsGithub />
        </div>
        <div className="page-pill">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;

// LeftSideBar.propTypes = {
//   skillImage: PropTypes.any,
// };
