import React from 'react'
import  '../style/About.css';

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I am a passionate web developer with a love for creating dynamic and
            user-friendly applications. With a background in both front-end and
            back-end development, I enjoy building full-stack solutions that
            solve real-world problems. My expertise includes HTML, CSS, JavaScript,
            React, and Node.js. I am always eager to learn new technologies and
            improve my skills. In my free time, I enjoy contributing to open-source       
            projects and exploring the latest trends in web development.
          </p>
          <p>
            I believe in the power of collaboration and enjoy working with teams
            to bring ideas to life. My goal is to create applications that not
            only meet user needs but also provide a delightful experience. I am
            excited about the future of web development and look forward to
            contributing to innovative projects.
          </p>
        </div>
        <div className="resume-download">
          <a href="/resume.pdf" className="btn btn-primary" download>
            Download Resume
          </a>

        </div>
      </section>
    </>
  )
}

export default About