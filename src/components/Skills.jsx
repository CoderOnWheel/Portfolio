import React from 'react';
import SkillsList from '../Model/SkillsList';
import reactIcon from '../assets/react.svg';
import jsIcon from '../assets/js.svg';
import cssIcon from '../assets/css.svg';
import htmlIcon from '../assets/html.svg';
import '../style/Skill.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <SkillsList icon={reactIcon} title="React" description="Component-based UI development" />
        <SkillsList icon={jsIcon} title="JavaScript" description="Dynamic web functionality" />
        <SkillsList icon={cssIcon} title="CSS" description="Responsive and modern styling" />
        <SkillsList icon={htmlIcon} title="HTML" description="Semantic web structure" />
      </div>
    </div>
  );
};

export default Skills;
