import React from "react";
import PropTypes from "prop-types";

const ServiceList = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={`${title} icon`} className="service-icon" />
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-desc">{description}</p>
      </div>
    </div>
  );
};

ServiceList.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ServiceList;
