import './SectionHeader.css';
import PropTypes from 'prop-types';

function SectionHeader(props) {
  return (
    <>
    <div className="section-header-container">
        <div className="header-text">
            {props.text}
        </div>
    <div className="line-break"></div></div>
    </>
  );
}

export default SectionHeader;

SectionHeader.propTypes = {
    text: PropTypes.string
  };
