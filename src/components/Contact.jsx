import { cvData } from '../data/cvData';

const Contact = () => {
  const { about } = cvData;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content scroll-reveal">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-text">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat.
          </p>
          <div className="contact-links">
            {about.email && (
              <a href={`mailto:${about.email}`} className="contact-button">
                <span>📧</span>
                <span>Email Me</span>
              </a>
            )}
            {about.linkedin && (
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            )}
            {about.github && (
              <a
                href={about.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <span>💻</span>
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

