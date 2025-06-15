import React from "react";
import ServiceList from "../Model/ServiceList";
import webDevIcon from "../assets/webdeveloper.jpeg";
import seoIcon from "../assets/seo.jpeg";
import automationIcon from "../assets/auto.jpeg";
import uiuxIcon from "../assets/uiux.jpeg";
import apiIcon from "../assets/api.jpeg";
import consultingIcon from "../assets/techconsulting.jpeg";

const Service = () => {
  return (
    <div className="service-section">
      <h2>My Services</h2>
      <div className="service-grid">
        <ServiceList 
          icon={webDevIcon} 
          title="Web Development" 
          description="Full-stack development for responsive, modern websites."
        />
        <ServiceList 
          icon={seoIcon} 
          title="SEO Optimization" 
          description="Improve your website's visibility on search engines."
        />
        <ServiceList 
          icon={automationIcon} 
          title="Business Automation" 
          description="Automate repetitive tasks to save time and cost."
        />
        <ServiceList 
          icon={uiuxIcon} 
          title="UI/UX Design" 
          description="Design intuitive and user-friendly interfaces."
        />
        <ServiceList 
          icon={apiIcon} 
          title="API Integration" 
          description="Connect and integrate third-party services seamlessly."
        />
        <ServiceList 
          icon={consultingIcon} 
          title="Tech Consulting" 
          description="Get expert guidance on your digital strategy."
        />
      </div>
    </div>
  );
};

export default Service;
