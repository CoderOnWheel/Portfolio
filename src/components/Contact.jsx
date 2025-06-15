import React from 'react';
import '../style/Common.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-intro">I'm open to opportunities, collaborations, or just a friendly chat. Let’s connect!</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea placeholder="Your Message" name="message" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>

        <div className="contact-socials">
          <a href="mailto:your@email.com">📧 your@email.com</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">💻 GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
