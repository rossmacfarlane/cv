import { cvData } from '../data/cvData';
import Timeline from './Timeline';
import { useEffect } from 'react';
import { initStaggerAnimation } from '../utils/animations';

const Education = () => {
  const { education } = cvData;

  useEffect(() => {
    initStaggerAnimation('.education-timeline', '.timeline-item');
  }, []);

  if (!education || education.length === 0) {
    return (
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Education</h2>
          <p className="scroll-reveal">No education data available. Add your education to cvData.js</p>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Education</h2>
        <div className="education-timeline">
          <Timeline items={education} type="education" />
        </div>
      </div>
    </section>
  );
};

export default Education;

