import { cvData } from '../data/cvData';
import FilterableGrid from './FilterableGrid';
import { useEffect } from 'react';
import { initStaggerAnimation } from '../utils/animations';

const Projects = () => {
  const { projects } = cvData;

  useEffect(() => {
    initStaggerAnimation('.projects-grid', '.project-item');
  }, []);

  const renderProject = (project) => (
    <div className="project-card project-item">
      <div className="project-header">
        <h3 className="project-name">{project.name}</h3>
        <div className="project-links">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
              Live
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          )}
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      {project.technologies && project.technologies.length > 0 && (
        <div className="project-tech">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
    </div>
  );

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Projects</h2>
          <p className="scroll-reveal">No projects data available. Add your projects to cvData.js</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Projects</h2>
        <FilterableGrid
          items={projects}
          filterKey="technologies"
          renderItem={renderProject}
        />
      </div>
    </section>
  );
};

export default Projects;

