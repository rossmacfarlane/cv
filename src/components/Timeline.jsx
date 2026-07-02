import { useState } from 'react';
import { getCompanyLogo, getCompanyInitials } from '../utils/logoUtils';

const Timeline = ({ items, type = 'experience' }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [logoErrors, setLogoErrors] = useState({});

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (date) => {
    if (!date || date === 'Present') return date;
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const handleLogoError = (itemId) => {
    setLogoErrors(prev => ({ ...prev, [itemId]: true }));
  };

  const renderLogo = (item) => {
    const orgName = type === 'experience' ? item.company : item.institution;
    const logoUrl = getCompanyLogo(orgName, item.logo);
    const hasError = logoErrors[item.id];
    const initials = getCompanyInitials(orgName);

    if (!logoUrl || hasError) {
      return (
        <div className="company-logo company-logo-placeholder">
          <span className="logo-initials">{initials}</span>
        </div>
      );
    }

    return (
      <div className="company-logo">
        <img
          src={logoUrl}
          alt={`${orgName} logo`}
          onError={() => handleLogoError(item.id)}
          loading="lazy"
        />
      </div>
    );
  };

  const renderAchievements = (achievements) => (
    <ul className="timeline-achievements">
      {achievements.map((achievement, idx) => (
        <li key={idx}>{achievement}</li>
      ))}
    </ul>
  );

  const renderTechnologies = (technologies) => (
    <div className="timeline-tech">
      {technologies.map((tech, idx) => (
        <span key={idx} className="tech-tag">{tech}</span>
      ))}
    </div>
  );

  const renderRoleDetails = (role) => (
    <div className="timeline-role">
      <h4 className="timeline-role-title">{role.position}</h4>
      <p className="timeline-role-date">
        {formatDate(role.startDate)} – {formatDate(role.endDate)}
      </p>
      {role.description && <p className="timeline-description">{role.description}</p>}
      {role.achievements?.length > 0 && renderAchievements(role.achievements)}
    </div>
  );

  const renderDetails = (item) => {
    if (item.roles?.length > 0) {
      return (
        <>
          {item.description && <p className="timeline-description">{item.description}</p>}
          <div className="timeline-roles">
            {item.roles.map((role, idx) => (
              <div key={idx}>{renderRoleDetails(role)}</div>
            ))}
          </div>
          {item.technologies?.length > 0 && renderTechnologies(item.technologies)}
        </>
      );
    }

    return (
      <>
        {item.description && <p className="timeline-description">{item.description}</p>}
        {item.achievements?.length > 0 && renderAchievements(item.achievements)}
        {item.technologies?.length > 0 && renderTechnologies(item.technologies)}
      </>
    );
  };

  return (
    <div className="timeline">
      {items.map((item, index) => {
        const isExpanded = expandedId === item.id;
        const isLast = index === items.length - 1;
        const subtitle = type === 'experience' && item.roles?.length > 1
          ? `${item.roles.length} roles`
          : null;

        return (
          <div key={item.id} className={`timeline-item ${isExpanded ? 'expanded' : ''}`}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header" onClick={() => toggleExpand(item.id)}>
                {renderLogo(item)}
                <div className="timeline-main">
                  <h3>{type === 'experience' ? item.position : item.degree}</h3>
                  <p className="timeline-org">
                    {type === 'experience' ? item.company : item.institution}
                    {subtitle && <span className="timeline-subtitle"> · {subtitle}</span>}
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
              <div className="timeline-details">
                {renderDetails(item)}
              </div>
            </div>
            {!isLast && <div className="timeline-line"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
