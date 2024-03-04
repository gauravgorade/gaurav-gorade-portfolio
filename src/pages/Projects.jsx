
import React, { useState } from "react";

import IMG_NOT_FOUND from '../assets/images/not_found.png';


const projectData = [
  {
    image: 'https://www.hoteljobber.com/site/images-brand/logo-hoteljobbe.png',
    title: 'Hoteljobber',
    url: 'https://www.hoteljobber.com/'
  },
  {
    image: 'https://raw.githubusercontent.com/gauravgorade/bubble-game/main/bubble-game_ss.png',
    title: 'Bubble Game',
    url: 'https://bubble-game-five-psi.vercel.app/'
  },
  {
    image: 'https://raw.githubusercontent.com/gauravgorade/funkar-design-app/main/ss.png?token=GHSAT0AAAAAACMV2B7OQYG7K7SM6OUPFTV2ZPEXCBA',
    title: 'Funkar',
    url: 'https://funkar-design-app.vercel.app/'
  },
  {
    image: 'https://gauravgorade.github.io/public/images/work/work_image_7.png',
    title: 'Kia',
    url: 'https://www.kia-autobahn.com/'
  },
  {
    image: 'https://gauravgorade.github.io/public/images/work/work_image_8.png',
    title: 'Volkswagen',
    url: 'https://www.vw-autobahn.com/'
  },
  {
    image: 'https://gauravgorade.github.io/public/images/work/work_image_3.png',
    title: 'Detect Diagnostics',
    url: 'https://www.detectdiagnostics.com/'
  },
  {
    image: 'https://gauravgorade.github.io/public/images/work/work_image_4.png',
    title: 'Jaju Clinic',
    url: 'https://www.jajuclinic.com/'
  },

]

function Projects() {
  const [projects, setProjects] = useState(projectData);

  const handleImageError = (index) => {
    const updatedProjects = [...projects]; 
    updatedProjects[index].image = IMG_NOT_FOUND;
    setProjects(updatedProjects); 
  }

  return (
    <div className="projects">
      <p className='secondary-title'>Projects</p>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img onError={() => handleImageError(index)} src={project.image} alt="" />
            <p className="text">{project.title}</p>
            <a rel="noreferrer" target='_blank' href={project.url}>Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
