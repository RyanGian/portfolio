import "./ProjectToggle.css";
import PropTypes from "prop-types";

function ProjectToggle(props) {
  return (
    <div className="project-toggle-container">
      <div
        className="personal-projects-tab tab-box"
        onClick={() => props.setProjectTab("personal")}
      >
        PERSONAL
      </div>
      <div
        className="uni-projects-tab tab-box"
        onClick={() => props.setProjectTab("uni")}
      >
        UNI
      </div>
    </div>
  );
}

export default ProjectToggle;

ProjectToggle.propTypes = {
  setProjectTab: PropTypes.func,
};
