import PropTypes from 'prop-types';
import './ProjectSample.css';
import gitHubLogo from "../assets/github-logo.png";

import linkLogo from "../assets/link-logo.png";


const ProjectSample = (props) => {
    return (
        <div>
            <div className="projects-sample-container">
                <div className="project-sample-image-container">
                    <img className='project-sample-image' src={props.image} alt="" />
                </div>
                <div className="projects-sample-text-container">
                    <img className='link-logo' src={linkLogo} alt="gitHubLogo"/>
                    <img className='github-logo' src={gitHubLogo} alt="gitHubLogo"/>
                    <span className="projects-sample-text-title">{props.title}</span>
                    <div className="projects-sample-text-description">{props.description}</div>
                    <div className='bottom-div'>
                        <div className="projects-sample-text-application">{props.application}</div>
                        <div className="projects-sample-text-language">{props.language}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectSample;

ProjectSample.propTypes = {
    title: PropTypes.string,
    subtext: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.any
};