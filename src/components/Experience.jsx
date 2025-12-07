import { cvData } from '../data/cvData';
import Timeline from './Timeline';
import { useEffect } from 'react';
import { initStaggerAnimation } from '../utils/animations';

const Experience = () => {
  const { experience } = cvData;

  useEffect(() => {
    initStaggerAnimation('.experience-timeline', '.timeline-item');
  }, []);

  if (!experience || experience.length === 0) {
    return (
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Experience</h2>
          <p className="scroll-reveal">No experience data available. Add your experience to cvData.js</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Experience</h2>
        <div className="experience-timeline">
          <Timeline items={experience} type="experience" />
        </div>
      </div>
    </section>
  );
};

export default Experience;

