/**
 * Get company logo URL
 * Supports:
 * 1. Direct logo URL if provided in data
 * 2. Clearbit Logo API (free, no API key needed)
 * 3. Fallback to a placeholder
 */
export const getCompanyLogo = (companyName, logoUrl) => {
  // If a direct logo URL is provided, use it
  if (logoUrl) {
    return logoUrl;
  }

  // Use Clearbit Logo API (free, no API key required)
  // Format: https://logo.clearbit.com/{domain}
  // We'll try to extract domain from company name or use a known mapping
  const domain = getCompanyDomain(companyName);
  if (domain) {
    return `https://logo.clearbit.com/${domain}`;
  }

  // Fallback: return null to use placeholder
  return null;
};

/**
 * Get company domain from company name
 * Maps known companies to their domains
 */
const getCompanyDomain = (companyName) => {
  const domainMap = {
    'FanDuel': 'fanduel.com',
    'Ideagen PLC': 'ideagen.com',
    'Ideagen': 'ideagen.com',
    'Agria Pet Insurance': 'agriapetinsurance.com',
    'Credosoft': 'credosoft.com',
    'MP Locums': 'mplocums.com',
    'TomRauch.com': 'tomrauch.com',
    'Heriot-Watt University': 'hw.ac.uk',
  };

  // Check exact match first
  if (domainMap[companyName]) {
    return domainMap[companyName];
  }

  // Try case-insensitive match
  const lowerName = companyName.toLowerCase();
  for (const [key, domain] of Object.entries(domainMap)) {
    if (key.toLowerCase() === lowerName) {
      return domain;
    }
  }

  // If no mapping found, try to construct domain from company name
  // This is a fallback - may not always work
  const cleanName = companyName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special chars
    .replace(/\s+/g, '') // Remove spaces
    .replace(/plc|llc|inc|corp|ltd|limited/gi, ''); // Remove common suffixes

  return cleanName ? `${cleanName}.com` : null;
};

/**
 * Get initials for company logo placeholder
 */
export const getCompanyInitials = (companyName) => {
  if (!companyName) return '?';
  
  const words = companyName.trim().split(/\s+/);
  if (words.length >= 2) {
    // Take first letter of first two words
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  // Take first two letters of the company name
  return companyName.substring(0, 2).toUpperCase();
};
