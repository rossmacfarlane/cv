// LinkedIn Data Parser
// This utility will parse LinkedIn export data and transform it to our CV format

/**
 * Parse LinkedIn export data (CSV or JSON format)
 * @param {Object|Array} linkedinData - LinkedIn export data
 * @returns {Object} Formatted CV data
 */
export const parseLinkedInData = (linkedinData) => {
  // This will be implemented based on LinkedIn export format
  // For now, return a template structure
  
  return {
    about: {
      name: linkedinData.name || '',
      title: linkedinData.headline || '',
      summary: linkedinData.summary || '',
      location: linkedinData.location || '',
      email: linkedinData.email || '',
      linkedin: linkedinData.profileUrl || '',
    },
    experience: parseExperience(linkedinData.positions || []),
    education: parseEducation(linkedinData.educations || []),
    skills: parseSkills(linkedinData.skills || []),
    projects: parseProjects(linkedinData.projects || []),
    certifications: parseCertifications(linkedinData.certifications || []),
  };
};

const parseExperience = (positions) => {
  return positions.map((pos, index) => ({
    id: index + 1,
    company: pos.companyName || '',
    position: pos.title || '',
    location: pos.location || '',
    startDate: formatDate(pos.startDate),
    endDate: pos.endDate ? formatDate(pos.endDate) : 'Present',
    description: pos.description || '',
    achievements: extractAchievements(pos.description),
    technologies: extractTechnologies(pos.description),
  }));
};

const parseEducation = (educations) => {
  return educations.map((edu, index) => ({
    id: index + 1,
    institution: edu.schoolName || '',
    degree: edu.degree || '',
    field: edu.fieldOfStudy || '',
    location: edu.location || '',
    startDate: formatDate(edu.startDate),
    endDate: formatDate(edu.endDate),
    description: edu.description || '',
  }));
};

const parseSkills = (skills) => {
  const categorized = {
    languages: [],
    frameworks: [],
    tools: [],
    other: [],
  };

  // Simple categorization - can be enhanced
  const languageKeywords = ['javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'rust'];
  const frameworkKeywords = ['react', 'vue', 'angular', 'node', 'express', 'django', 'flask', 'spring'];

  skills.forEach((skill) => {
    const skillName = skill.name?.toLowerCase() || '';
    if (languageKeywords.some((kw) => skillName.includes(kw))) {
      categorized.languages.push(skill.name);
    } else if (frameworkKeywords.some((kw) => skillName.includes(kw))) {
      categorized.frameworks.push(skill.name);
    } else {
      categorized.other.push(skill.name);
    }
  });

  return categorized;
};

const parseProjects = (projects) => {
  return projects.map((proj, index) => ({
    id: index + 1,
    name: proj.title || '',
    description: proj.description || '',
    technologies: extractTechnologies(proj.description),
    url: proj.url || '',
    github: proj.github || '',
  }));
};

const parseCertifications = (certifications) => {
  return certifications.map((cert, index) => ({
    id: index + 1,
    name: cert.name || '',
    issuer: cert.issuingOrganization || '',
    date: formatDate(cert.issueDate),
    url: cert.url || '',
  }));
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  // Handle various date formats from LinkedIn
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toISOString().slice(0, 7); // YYYY-MM format
};

const extractAchievements = (text) => {
  if (!text) return [];
  // Simple extraction - can be enhanced with NLP
  const sentences = text.split(/[.!?]\s+/);
  return sentences.filter((s) => s.length > 20).slice(0, 5);
};

const extractTechnologies = (text) => {
  if (!text) return [];
  // Extract common technology names (simplified)
  const techKeywords = [
    'react', 'vue', 'angular', 'node', 'express', 'python', 'javascript',
    'typescript', 'java', 'spring', 'django', 'flask', 'aws', 'docker',
    'kubernetes', 'mongodb', 'postgresql', 'mysql', 'redis', 'git',
  ];
  const found = [];
  const lowerText = text.toLowerCase();
  techKeywords.forEach((tech) => {
    if (lowerText.includes(tech)) {
      found.push(tech.charAt(0).toUpperCase() + tech.slice(1));
    }
  });
  return [...new Set(found)]; // Remove duplicates
};

