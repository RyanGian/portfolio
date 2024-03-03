import "./SkillBox.css";
import PropTypes from "prop-types";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

function SkillBox(props) {
  return (
    <ScrollAnimation
      // animateOnce={false}
      animateIn="animate__fadeInLeft"
      delay={230}
    >
      <div className="skill-box-container">
        {/* <img className="skill-image" src={props.skillImage} alt="" /> */}
        <div className="prop-icon">{<img src={props.icon} alt="" />}</div>
        <div className="skill-text">{props.skillText}</div>
      </div>
    </ScrollAnimation>
  );
}

export default SkillBox;

SkillBox.propTypes = {
  icon: PropTypes.any,
  skillText: PropTypes.string,
};
