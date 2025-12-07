import { cvData } from '../data/cvData';
import { useEffect } from 'react';
import { initStaggerAnimation } from '../utils/animations';

const Skills = () => {
  const { skills } = cvData;

  const skillCategories = [
    { title: 'Languages', items: skills.languages || [] },
    { title: 'Frameworks & Libraries', items: skills.frameworks || [] },
    { title: 'Tools & Technologies', items: skills.tools || [] },
    { title: 'Other', items: skills.other || [] },
  ].filter((category) => category.items.length > 0);

  useEffect(() => {
    initStaggerAnimation('.skills-grid', '.skill-item');
  }, []);

  if (skillCategories.length === 0) {
    return (
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Skills</h2>
          <p className="scroll-reveal">No skills data available. Add your skills to cvData.js</p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category scroll-reveal">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.items.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-tag skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

