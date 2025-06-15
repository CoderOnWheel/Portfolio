import React from "react";
import PropTypes from "prop-types";

const SkillsList = ({ icon, title, description }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={`${title} icon`} className="skill-icon" />
      <div className="skill-info">
        <h4 className="skill-title">{title}</h4>
        {description && <p className="skill-desc">{description}</p>}
      </div>
    </div>
  );
};

SkillsList.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default SkillsList;
