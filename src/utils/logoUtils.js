/**
 * Resolve a public asset path for GitHub Pages base URL support.
 */
export const getAssetUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const logoMap = {
  FanDuel: 'logos/fanduel.svg',
  'Ideagen PLC': 'logos/ideagen.svg',
  Ideagen: 'logos/ideagen.svg',
  'Agria Pet Insurance': 'logos/agria.png',
  Credosoft: 'logos/credosoft.svg',
  'MP Locums': 'logos/mplocums.svg',
  'TomRauch.com': 'logos/tomrauch.svg',
  'Heriot-Watt University': 'logos/hw.svg',
};

/**
 * Get company or institution logo URL from local assets.
 */
export const getCompanyLogo = (companyName, logoUrl) => {
  if (logoUrl) {
    return getAssetUrl(logoUrl);
  }

  if (logoMap[companyName]) {
    return getAssetUrl(logoMap[companyName]);
  }

  const lowerName = companyName?.toLowerCase();
  for (const [key, file] of Object.entries(logoMap)) {
    if (key.toLowerCase() === lowerName) {
      return getAssetUrl(file);
    }
  }

  return null;
};

/**
 * Get initials for company logo placeholder
 */
export const getCompanyInitials = (companyName) => {
  if (!companyName) return '?';

  const words = companyName.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return companyName.substring(0, 2).toUpperCase();
};
