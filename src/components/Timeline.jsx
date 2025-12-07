import { useState } from 'react';

const Timeline = ({ items, type = 'experience' }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (date) => {
    if (!date || date === 'Present') return date;
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="timeline">
      {items.map((item, index) => {
        const isExpanded = expandedId === item.id;
        const isLast = index === items.length - 1;

        return (
          <div key={item.id} className={`timeline-item ${isExpanded ? 'expanded' : ''}`}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header" onClick={() => toggleExpand(item.id)}>
                <div className="timeline-main">
                  <h3>{type === 'experience' ? item.position : item.degree}</h3>
                  <p className="timeline-org">
                    {type === 'experience' ? item.company : item.institution}
                  </p>
                  <p className="timeline-meta">
                    {item.location && <span>{item.location}</span>}
                    <span className="timeline-date">
                      {formatDate(item.startDate)} - {formatDate(item.endDate)}
                    </span>
                  </p>
                </div>
                <button className="timeline-toggle" aria-expanded={isExpanded}>
                  {isExpanded ? '▼' : '▶'}
                </button>
              </div>
              {isExpanded && (
                <div className="timeline-details">
                  {item.description && <p className="timeline-description">{item.description}</p>}
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="timeline-achievements">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="timeline-tech">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            {!isLast && <div className="timeline-line"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;

