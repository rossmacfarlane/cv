# Interactive CV Website

A modern, interactive CV website built with React and Vite, featuring dark mode design, smooth animations, and deployable to GitHub Pages.

Live site: [rossmacfarlane.github.io/cv](https://rossmacfarlane.github.io/cv/)

## Features

- **Dark Mode Design** - Sleek, professional dark theme
- **Smooth Animations** - Scroll-reveal animations and transitions
- **Responsive** - Mobile-first, works on all devices
- **Interactive Timeline** - Expandable work experience and education with company logos
- **Filterable Projects** - Filter projects by technology
- **AI Attribution** - Very subtle AI credit indicator

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rossmacfarlane/cv.git
cd cv
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173/cv/](http://localhost:5173/cv/) in your browser

### Adding Your CV Data

1. Open `src/data/cvData.js`
2. Fill in your information:
   - **About**: Name, title, summary, contact info
   - **Experience**: Work history with achievements and optional `logo` paths
   - **Education**: Educational background
   - **Skills**: Categorized skills (languages, frameworks, tools, other)
   - **Projects**: Portfolio projects with technologies

### Company Logos

Company and institution logos are stored locally in `public/logos/` and resolved via `src/utils/logoUtils.js`. This avoids dependency on external logo APIs.

1. Add PNG or SVG logo files to `public/logos/` (128px minimum recommended)
2. Map company names to filenames in `logoMap` inside `logoUtils.js`, or set an explicit `logo` field per entry in `cvData.js`:

```javascript
{
  company: "Example Corp",
  logo: "logos/example.png",
  // ...
}
```

Logo paths are automatically prefixed with the Vite `base` URL for GitHub Pages compatibility.

### Profile Picture

Save your photo as `public/profile.jpg`. The About section resolves the path using `import.meta.env.BASE_URL`.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

### Initial Setup

1. **Create GitHub Repository**
   - Create a new repository on GitHub
   - Push your code to the `main` branch

2. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
   - The workflow will automatically deploy on push to `main`

3. **Update Base Path** (if needed)
   - If your repository name is not `cv`, update `base` in `vite.config.js`:
   ```javascript
   base: '/your-repo-name/',
   ```

4. **Custom Domain Setup** (Optional)
   - Create `public/CNAME` file with your subdomain:
   ```
   cv.yourdomain.com
   ```
   - In Squarespace DNS settings, add:
     - Type: CNAME
     - Host: cv (or your subdomain)
     - Points to: `username.github.io`
   - Or use A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

### Automatic Deployment

Once set up, every push to the `main` branch will automatically:
1. Build the site
2. Deploy to GitHub Pages
3. Update your live site in 1-2 minutes

## Project Structure

```
cv/
├── public/
│   ├── logos/           # Company and institution logos
│   └── profile.jpg      # Profile photo
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Timeline.jsx
│   │   ├── FilterableGrid.jsx
│   │   └── AICredit.jsx
│   ├── styles/          # CSS files
│   ├── utils/
│   │   ├── animations.js
│   │   └── logoUtils.js
│   ├── data/
│   │   └── cvData.js
│   ├── App.jsx
│   └── main.jsx
├── .github/workflows/deploy.yml
├── vite.config.js
└── package.json
```

## Customization

### Colors

Edit `src/styles/theme.css` to customize the color scheme:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent-primary: #6366f1;
  /* ... more variables */
}
```

### Animations

Modify animation timings in `src/styles/animations.css` or adjust transition speeds in `theme.css`.

### Layout

Components are modular — edit individual component files in `src/components/` to customize layout and behavior.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with custom properties
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## License

This project is open source and available for personal use.

## Acknowledgments

Built with AI assistance — see the subtle indicator in the bottom-right corner.
