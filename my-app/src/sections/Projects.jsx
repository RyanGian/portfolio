import React from "react";
import './Projects.css';
import logo from "../assets/svg (3).png";
import ProjectSample from "../components/ProjectSample";
import sample1Image from "../assets/personal-sample1.png";
import sample2Image from "../assets/personal-sample2.PNG";
import a from "../assets/sat1.png";
import b from "../assets/maze1.png";
import c from "../assets/s3.PNG";
import ProjectToggle from "../components/ProjectToggle";
import SectionHeader from "../components/SectionHeader";

function Projects() {
  const [projectTab, setProjectTab] = React.useState('personal');
  // Personal or Uni
  return (
    <div className='projects-container'>
      <SectionHeader text={'PROJECTS'}/>


        <ProjectToggle setProjectTab={setProjectTab}/>
        {(projectTab === 'personal') ?
          <>
            <ProjectSample image={sample2Image} title={'Personal Portfolio Website'} description={'This site!'} application={'Front End'} language={'HTML/CSS, Javascript - react'}/>
            <ProjectSample image={sample1Image} title={'Visualise Chrome Extension Analytics'} description={'Chrome Developer tool that helps to visualise developer analytics'} application={'Chrome Extension'} language={'HTML/CSS, Pure Javascript'} />
          </>
          :
          <>
            <ProjectSample image={a} title={'Back in Blackout'} description={'This site!'} application={'Backend'} language={'Java'}/>
            <ProjectSample image={b} title={'Dungeon Mania'} description={'This site!'} application={'Backend'} language={'Java'}/>
            <ProjectSample image={c} title={'AirBrB'} description={'This site!'} application={'Frontend'} language={'HTML/CSS, Javascript - react'}/>
          </>

        }



        {/* <img
            className="image"
            src={ logo }
            alt="logos"
          ></img> */}
    </div>
  );
}

export default Projects;