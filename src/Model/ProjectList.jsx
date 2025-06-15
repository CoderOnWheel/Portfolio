import React from "react";
import PropTypes from "prop-types";

const ProjectList = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <div className="project-info">
        <h4 className="project-title">{title}</h4>
        <p className="project-desc">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

ProjectList.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default ProjectList;
