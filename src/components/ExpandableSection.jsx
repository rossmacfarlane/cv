import { useState } from 'react';

const ExpandableSection = ({ title, children, defaultExpanded = false, icon }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`expandable-section ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="expandable-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className="expandable-title">
          {icon && <span className="expandable-icon">{icon}</span>}
          <h3>{title}</h3>
        </div>
        <span className="expandable-arrow">
          {isExpanded ? '▼' : '▶'}
        </span>
      </button>
      <div className="expandable-content">
        {children}
      </div>
    </div>
  );
};

export default ExpandableSection;

