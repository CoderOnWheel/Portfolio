import React from "react";
import ProjectList from "../Model/ProjectList";
import project4Image from '../assets/react.svg';
import project3Image from '../assets/js.svg';
import project2Image from '../assets/css.svg';
import project1Image from '../assets/html.svg';
import '../style/Project.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <ProjectList 
          image={project1Image} 
          title="Astrology Website" 
          description="Astrology appointment booking with payment gateway" 
          link="https://your-live-link.com"
        />
        <ProjectList 
          image={project2Image} 
          title="Portfolio Website" 
          description="Responsive React portfolio showcasing skills and projects" 
          link="https://your-portfolio-link.com"
        />
        <ProjectList 
          image={project3Image} 
          title="Todo App" 
          description="Simple todo list with React and localStorage" 
          link="https://your-todo-link.com"
        />
      </div>
    </div>
  );
};

export default Projects;
