import { cvData } from '../data/cvData';

const About = () => {
  const { about } = cvData;

  return (
      <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content scroll-reveal">
          {about.profilePicture && (
            <div className="about-profile-picture">
              <img 
                src={about.profilePicture} 
                alt={`${about.name} profile picture`}
                loading="eager"
              />
            </div>
          )}
          <div className="about-header">
            <h1 className="about-name">
              <span className="text-gradient">{about.name}</span>
            </h1>
            <h2 className="about-title">{about.title}</h2>
            <p className="about-location">{about.location}</p>
          </div>
          <div className="about-text">
            <p>{about.summary}</p>
          </div>
          <div className="about-links">
            {about.email && (
              <a href={`mailto:${about.email}`} className="contact-link">
                Email
              </a>
            )}
            {about.linkedin && (
              <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </a>
            )}
            {about.github && (
              <a href={about.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

