import './SkillBox.css';
import PropTypes from 'prop-types';

function SkillBox(props) {
  return (
    <div className='skill-box-container'>
      <img className='skill-image' src={props.skillImage} alt="" />
      <div className='skill-text'>{props.skillText}</div>
    </div>
  );
}

export default SkillBox;


SkillBox.propTypes = {
  skillImage: PropTypes.any,
  skillText: PropTypes.string,
};
