import { useRef } from "react";
import { useEffect } from "react";
import { SiPostman, SiGithub, SiJira, SiSlack, SiFigma, SiAdobephotoshop } from "react-icons/si";
import skillsData from '../Data/skillsData.json'

function Skills() {
  return (
    <div className="skills">
      <p className='secondary-title'>Skills</p>
      <p className="text">Elevating Projects with Expertise in the Following Technologies</p>
      <br />
      {skillsData.map((data, index) => (
        <Progressbar key={index} skill={data.skill} rating={data.rating} />
      ))}
      <p className='secondary-title'>Tools</p>
      <p className="text"> Streamlining Workflows with Essential Tools</p>
      <br />
      <div className="tools-icons">
        <SiPostman className="tool-icon" />
        <SiGithub className="tool-icon" />
        <SiJira className="tool-icon" />
        <SiSlack className="tool-icon" />
        <SiFigma className="tool-icon" />
        <SiAdobephotoshop className="tool-icon" />
      </div>
    </div>
  );
}


const Progressbar = ({ skill: label, rating }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const progressFill = progressRef.current;
    progressFill.style.transition = 'width 1.5s ease-in-out';
    progressFill.style.width = `${rating * 10}%`;

    return () => {
      progressFill.style.transition = '';
    };
  }, [rating]); 

  return (
    <div className="progress-bar">
      <div className="progress-label">{label}</div>
      <div className="progress-fill" ref={progressRef}></div>
      <div className="progress-rating">{rating}/10</div>
    </div>
  )
}





export default Skills;
