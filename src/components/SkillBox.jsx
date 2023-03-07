import "./SkillBox.css";
import PropTypes from "prop-types";

function SkillBox(props) {
  return (
    <div className="skill-box-container">
      {/* <img className="skill-image" src={props.skillImage} alt="" /> */}
      <div className="prop-icon">{<img src={props.icon} alt="" />}</div>
      <div className="skill-text">{props.skillText}</div>
    </div>
  );
}

export default SkillBox;

SkillBox.propTypes = {
  icon: PropTypes.any,
  skillText: PropTypes.string,
};
