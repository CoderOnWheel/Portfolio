import React from 'react'
import '../style/Experience.css';

const Experience = () => {
  return (
    <>
      <section className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-item">
            <h3>Web Developer at XYZ Company</h3>
            <p>June 2020 - Present</p>
            <ul>
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with designers to create user-friendly interfaces.</li>
              <li>Implemented RESTful APIs for data retrieval and manipulation.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Software Engineer Intern at ABC Corp</h3>
            <p>January 2020 - May 2020</p>
            <ul>
              <li>Assisted in the development of internal tools using Python and Flask.</li>
              <li>Participated in code reviews and contributed to team discussions.</li>
              <li>Learned best practices in software development and agile methodologies.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience