import "./ProjectToggle.css";
import PropTypes from "prop-types";
import React from "react";

function ProjectToggle(props) {
  const [personalProjectsActive, setPersonalProjectsActive] =
    React.useState(true);
  const [uniProjectsActive, setUniProjectsActive] = React.useState(false);

  function setPersonal() {
    setPersonalProjectsActive(true);
    setUniProjectsActive(false);
  }

  function setUni() {
    setUniProjectsActive(true);
    setPersonalProjectsActive(false);
  }

  return (
    <div className="project-toggle-container">
      <div
        className={
          personalProjectsActive
            ? "personal-projects-tab tab-box active"
            : "personal-projects-tab tab-box"
        }
        onClick={() => {
          props.setProjectTab("personal");
          setPersonal();
        }}
      >
        PERSONAL
      </div>
      <div
        className={
          uniProjectsActive
            ? "uni-projects-tab tab-box active"
            : "uni-projects-tab tab-box"
        }
        onClick={() => {
          props.setProjectTab("uni");
          setUni();
        }}
      >
        UNIVERSITY
      </div>
    </div>
  );
}

export default ProjectToggle;

ProjectToggle.propTypes = {
  setProjectTab: PropTypes.func,
  projectTab: PropTypes.string,
};
